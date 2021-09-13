import { allowCors } from "../../glide-next";
import { connect } from "../../redis";

export default allowCors(async (req, res) => {
  const { counter, node } = req.query as any;
  const client = await connect();
  const count = await client.increment(counter, node);
  await client.disconnect();
  res.send({ count });
});
