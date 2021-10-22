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
  let data = await cache.fetch(url.value);
  if (query.value !== undefined) {
    data = jq.json(data, query.value);
  }

  if (data === null) {
    return undefined;
  }
  if (typeof data === "object" || Array.isArray(data)) {
    return JSON.stringify(data);
  }
  return data;
};

export default glide.column({
  name: "Fetch JSON",
  category: "Data & APIs",
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
