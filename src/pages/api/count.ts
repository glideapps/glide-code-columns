import type { NextApiRequest, NextApiResponse } from "next";

import { createClient } from "redis";

const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

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

  console.log({
    counter,
    node,
    localCount: count,
    nodes: { ...(await client.hGetAll(counter)) },
    total: countSum,
  });

  await client.disconnect();

  return countSum;
}

export default allowCors(async (req: NextApiRequest, res: NextApiResponse) => {
  const { redis, counter, node, count, updated } = req.query as any;
  const totalCount = await sumNodes(
    redis,
    counter,
    node,
    Number.parseInt(count),
    updated
  );
  res.status(200).json({
    count: totalCount,
  });
});
