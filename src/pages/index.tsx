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
  return JSON.stringify(jq.json(JSON.parse(json.value), query.value));
}

export default () => {
  useEffect(() => {
    glide.column(tranform);
  });
  return <div>jq column</div>;
};
