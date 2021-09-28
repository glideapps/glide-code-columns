import { Column, ColumnComponent } from "../glide.next";
import jq from "jq-web";

async function fetchCachedJSON(url: string): Promise<any> {
  const cache = await caches.open("fetch-column");
  await cache.add(url);
  const cachedResponse = await cache.match(url);

  if (cachedResponse !== undefined) {
    return await cachedResponse.json();
  } else {
    return await fetch(url).then(x => x.json());
  }
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
      cachesize: {
        displayName: "Cache Size",
        type: "number",
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
