import { Column, ColumnComponent } from "../glide.next";
import jq from "jq-web";

const run: Column = async (url, query) => {
  if (url.value === undefined) {
    return undefined;
  }
  let json = await fetch(url.value).then((x) => x.json());
  if (query.value !== undefined) {
    json = jq.json(json, query.value);
  }

  return typeof json === "object" ? JSON.stringify(json) : json;
};

const EchoColumn = () => (
  <ColumnComponent
    name="Fetch Column"
    description="Fetch and optionally transform JSON."
    author="David Siegel <david@glideapps.com>"
    params={[
      {
        name: "url",
        displayName: "URL",
        type: "string",
      },
      {
        name: "query",
        displayName: "JQ Query",
        type: "string",
      },
    ]}
    result={{ type: "primitive" }}
    run={run}
  />
);

export default EchoColumn;
