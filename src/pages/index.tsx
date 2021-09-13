import { useEffect } from "react";
import * as glide from "../glide";
import { ColumnValue } from "../glide";

async function column(endpoint: ColumnValue) {
  if (endpoint.value === undefined) {
    return undefined;
  }
  return await fetch(endpoint.value).then((x) => x.text());
}

export default () => {
  useEffect(() => {
    glide.column(column);
  });

  return <div>fetch column</div>;
};
