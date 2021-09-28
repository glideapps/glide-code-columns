import { Column, ColumnComponent } from "../glide.next";
import jq from "jq-web";

// Simple time-based cache to avoid spamming servers.
// We tried Cache API before but it's disallowed by our sandboxing.
const cacheMaxAgeSeconds = 5 * 60;
const cache = new Map<string, { timestamp: Date; json: any }>();

async function fetchCachedJSON(url: string): Promise<any> {
  const { timestamp, json } = cache.get(url) ?? { timestamp: new Date(0) };
  const ageSeconds = (new Date().getTime() - timestamp.getTime()) / 1000;
  if (ageSeconds < cacheMaxAgeSeconds) {
    return json;
  }

  const newJson = await fetch(url).then(x => x.json());
  cache.set(url, { timestamp: new Date(), json: newJson });
  return newJson;
}

const run: Column = async (url, query) => {
  if (url.value === undefined) {
    return undefined;
  }
  let json = await fetchCachedJSON(url.value);
  if (query.value !== undefined) {
    json = jq.json(json, query.value);
  }

  return typeof json === "object" ? JSON.stringify(json) : json;
};

const FetchColumn = () => (
  <ColumnComponent
    name="Fetch JSON"
    description="Fetch and optionally transform JSON."
    author="David Siegel <david@glideapps.com>"
    params={{
      url: {
        displayName: "URL",
        type: "string",
      },
      query: {
        displayName: "JQ Query",
        type: "string",
      },
    }}
    result={{ type: "primitive" }}
    example={{
      url: "https://pokeapi.co/api/v2/pokemon/1",
      query: `.name + " has types: " + (.types | map(.type.name) | join(", "))`,
    }}
    run={run}
  />
);

export default FetchColumn;
