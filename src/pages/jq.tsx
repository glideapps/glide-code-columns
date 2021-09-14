import { useEffect } from "react";
import * as glide from "../glide";
import { ColumnValue } from "../glide";
import jq from "jq-web";

function tranform(json: ColumnValue, query: ColumnValue) {
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
}

export default () => {
  useEffect(() => {
    glide.column(tranform);
  });
  return <div>jq column</div>;
};
