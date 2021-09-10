import * as glide from "./glide";

import { createClient } from "redis";

export async function sumNodes(
  redis: string,
  counter: string,
  node: string,
  count: number,
  updated: string
): Promise<number> {
  const client = createClient({
    socket: {
      url: redis,
    },
  });

  client.on("error", (err: any) => {
    throw new Error(`Redis Client Error ${err}`);
  });

  await client.connect();

  const counterNode = `${counter}:${node}`;
  const lastUpdate = await client.get(counterNode);
  if (new Date(lastUpdate).getTime() < new Date(updated).getTime()) {
    await client.set(counterNode, updated);
    await client.hSet(counter, { [node]: `${count}` });
  }

  const counts = await client.hVals(counter);
  const countSum = counts
    .map((c) => Number.parseInt(c, 10))
    .reduce((acc, n) => acc + n, 0);

  await client.disconnect();

  return countSum;
}

export default glide.column(async (redis, counter, node, count, updated) => {
  if (redis.value === undefined) return undefined;
  if (counter.value === undefined) return undefined;
  if (node.value === undefined) return undefined;
  if (count.value === undefined) return undefined;
  if (updated.value === undefined) return undefined;

  return await sumNodes(
    redis.value,
    counter.value,
    node.value,
    count.value,
    updated.value
  );
});
