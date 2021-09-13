import { allowCors } from "../../glide-next";

export default allowCors(async (req, res) => {
  const { url } = req.query;
  const json = await fetch(url as string).then((x) => x.json());
  res.send(json);
});
