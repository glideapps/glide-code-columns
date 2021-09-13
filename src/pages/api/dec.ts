import { allowCors } from "../../glide-next";
import { connect } from "../../redis";

export default allowCors(async (req, res) => {
  const {
    params: {
      counter: { value: counter },
    },
  } = req.body;
  const client = await connect();
  const count = await client.decrement(counter);
  await client.disconnect();
  res.send({ count });
});
