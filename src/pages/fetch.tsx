import { Column, ColumnComponent } from "../glide.next";
import jq from "jq-web";

import { Cache } from "../cache";

// Simple time-based cache to avoid spamming servers.
// We tried Cache API before but it's disallowed by our sandboxing.
const cache = new Cache({ timeoutSeconds: 5 * 60 });

const run: Column = async (url, query) => {
  if (url.value === undefined) {
    return undefined;
  }
  let json = await cache.fetch(url.value);
  if (query.value !== undefined) {
    json = jq.json(json, query.value);
  }

  return typeof json === "object" ? JSON.stringify(json) : json;
};

const FetchColumn = () => (
  <ColumnComponent
    name="Fetch JSON"
    description="Fetch and optionally transform JSON"
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
