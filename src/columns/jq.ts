import jq from "jq-web";

import * as glide from "../glide";

const run: glide.Column = async (json, query) => {
  if (json.value === undefined) {
    return undefined;
  }
  if (query.value === undefined) {
    return json.value;
  }
  const val = jq.json(JSON.parse(json.value), query.value);
  return typeof val === "object" || Array.isArray(val)
    ? JSON.stringify(val)
    : val;
};

export default glide.column({
  name: "Transform JSON",
  description: "Transform JSON with JQ",
  author: "David Siegel <david@glideapps.com>",
  video: "https://www.youtube.com/watch?v=EvpwhGeiH0U",
  about: `Learn more about jq at https://stedolan.github.io/jq/`,
  params: {
    json: {
      displayName: "JSON",
      type: "string",
    },
    query: {
      displayName: "JQ Query",
      type: "string",
    },
  },
  result: { type: "string" },
  run,
  example: {
    json: `{ "name": "David", "favorite food": "sushi" }`,
    query: `.name`,
  },
});
