import { useEffect } from "react";
import * as glide from "../glide";
import { ColumnValue } from "../glide";
import { fetchWithColumns } from "../glide-next";

async function fetchCount(
  redis: ColumnValue,
  counter: ColumnValue,
  node: ColumnValue,
  count: ColumnValue,
  updated: ColumnValue
) {
  if (
    [redis, counter, node, count, updated].some((f) => f.value === undefined)
  ) {
    return undefined;
  }

  const response = await fetchWithColumns(`/api/count`, {
    redis,
    counter,
    node,
    count,
    updated,
  });

  return response.count;
}

function Index() {
  useEffect(() => {
    glide.column(fetchCount);
  });

  return <div>redis counter</div>;
}

export default Index;
