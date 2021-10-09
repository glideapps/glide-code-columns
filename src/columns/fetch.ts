import * as glide from "../glide";
import jq from "jq-web";

import { Cache } from "../cache";

// Simple time-based cache to avoid spamming servers.
// We tried Cache API before but it's disallowed by our sandboxing.
const cache = new Cache({ timeoutSeconds: 5 * 60 });

const run: glide.Column = async (url, query) => {
  if (url.value === undefined) {
    return undefined;
  }
  let json = await cache.fetch(url.value);
  if (query.value !== undefined) {
    json = jq.json(json, query.value);
  }

  return typeof json === "object" ? JSON.stringify(json) : json;
};

export default glide.column({
  name: "Fetch JSON",
  description: "Fetch and optionally transform JSON",
  about: `
      Given a URL, this column fetches JSON data at that URL. An optional [jq query](https://stedolan.github.io/jq/manual/#Basicfilters) transforms the JSON.
    `,
  author: "David Siegel <david@glideapps.com>",
  video: "https://www.youtube.com/watch?v=EvpwhGeiH0U",
  params: {
    url: {
      displayName: "URL",
      type: "string",
    },
    query: {
      displayName: "JQ Query",
      type: "string",
    },
  },
  result: { type: "primitive" },
  example: {
    url: "https://api.icndb.com/jokes/random/3",
    query: `.value[0].joke`,
  },
  run,
});
