import { allowCors } from "../../glide-next";
import { connect } from "../../redis";

export async function sumNodes(
  counter: string,
  node: string,
  count: number,
  updated: string
): Promise<number> {
  const client = await connect();
  await client.updateCount(counter, node, count, updated);
  const total = await client.getCount(counter);

  console.log({
    counter,
    node,
    localCount: count,
    nodes: await client.getNodes(counter),
    total,
  });

  await client.disconnect();

  return total;
}

export default allowCors(async (req, res) => {
  const { counter, node, count, updated } = req.query as any;
  const totalCount = await sumNodes(
    counter,
    node,
    Number.parseInt(count),
    updated
  );
  res.status(200).json({
    count: totalCount,
  });
});
