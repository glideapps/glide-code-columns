import { allowCors } from "../../glide-next";
import { connect } from "../../redis";

export default allowCors(async (req, res) => {
  const { counter } = req.query as any;
  const client = await connect();
  const count = await client.increment(counter);
  await client.disconnect();
  res.send({ count });
});
