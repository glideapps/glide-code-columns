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

  const route = [
    `/api/count`,
    `?redis=${encodeURIComponent(redis.value)}`,
    `&counter=${encodeURIComponent(counter.value)}`,
    `&node=${encodeURIComponent(node.value)}`,
    `&count=${encodeURIComponent(count.value)}`,
    `&updated=${encodeURIComponent(updated.value)}`,
  ].join("");

  const response = await fetch(route).then((x) => x.json());
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
    console.trace(e);
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
