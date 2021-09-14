import jq from "jq-web";
import React from "react";
import { Column } from "../glide.next";

const JQColumn = () => (
  <Column
    name="Glide JQ Column"
    description="Transform JSON with JQ"
    author="David Siegel <david@glideapps.com>"
    params={[
      {
        name: "json",
        displayName: "JSON",
        type: "string",
      },
      {
        name: "query",
        displayName: "JQ Query",
        type: "string",
      },
    ]}
    result={{ type: "string" }}
  >
    {async (json, query) => {
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
    }}
  </Column>
);

export default JQColumn;
