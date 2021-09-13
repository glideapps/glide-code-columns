import { useEffect } from "react";
import * as glide from "../glide";
import { ColumnValue } from "../glide";
import { fetchWithColumns } from "../glide-next";

async function fetchCount(counter: ColumnValue) {
  if (counter.value === undefined) {
    return undefined;
  }

  const response = await fetchWithColumns(`/api/peek`, {
    counter,
  });

  return response.count;
}

function PeekPage() {
  useEffect(() => {
    glide.column(fetchCount);
  });

  return <div>peek count</div>;
}

export default PeekPage;
