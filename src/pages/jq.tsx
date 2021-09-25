import jq from "jq-web";
import React from "react";
import { Column, ColumnComponent } from "../glide.next";

const run: Column = async (json, query) => {
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

const JQColumn = () => (
  <ColumnComponent
    name="Transform JSON (jq)"
    description="Transform JSON with JQ"
    author="David Siegel <david@glideapps.com>"
    params={{
      json: {
        displayName: "JSON",
        type: "string",
      },
      query: {
        displayName: "JQ Query",
        type: "string",
      },
    }}
    result={{ type: "string" }}
    run={run}
    example={{
      json: `{ "name": "David", "moves": [{ "move": "Slap" }, { "move": "Toss" }] }`,
      query: `.name + " has moves: " + (.moves | map(.move) | join(", "))`,
    }}
  />
);

export default JQColumn;
