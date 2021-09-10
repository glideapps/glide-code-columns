import { useEffect } from "react";
import * as glide from "../glide";

function convert(x: any) {
  if (x instanceof Date) {
    return x.toISOString();
  } else if (Array.isArray(x)) {
    return x.map(convert);
  } else {
    return x;
  }
}

const main = glide.column(async (redis, counter, node, count, updated) => {
  if (redis.value === undefined) return undefined;
  if (counter.value === undefined) return undefined;
  if (node.value === undefined) return undefined;
  if (count.value === undefined) return undefined;
  if (updated.value === undefined) return undefined;

  const response = await fetch("/api/count", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      redis: redis.value,
      counter: counter.value,
      node: node.value,
      count: count.value,
      updated: updated.value,
    }),
  }).then((x) => x.json());
  return response.count;
});

async function listen(event) {
  const {
    origin,
    data: { key, params },
  } = event;

  let result;
  let error;
  try {
    result = await main(...params);
  } catch (e) {
    result = undefined;
    try {
      error = e.toString();
    } catch (e) {
      error = "Exception can't be stringified.";
    }
  }

  const response: any = { key };
  if (result !== undefined) {
    result = convert(result);
    response.result = { type: "string", value: result };
  }
  if (error !== undefined) {
    response.error = error;
  }

  // TODO fix this type
  (event.source?.postMessage as any)(response, "*");
}

function Index() {
  useEffect(() => {
    window.addEventListener("message", listen);
    return () => {
      window.removeEventListener("message", listen);
    };
  });
  return <div>redis counter</div>;
}

export default Index;
