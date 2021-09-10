import { sumNodes } from "./column";

test("We can get a count", async () => {
  await sumNodes(process.env.REDIS!, "main", "node1", 1, new Date().toString());
  await sumNodes(process.env.REDIS!, "main", "node2", 1, new Date().toString());
  const count = await sumNodes(
    process.env.REDIS!,
    "main",
    "node3",
    1,
    new Date().toString()
  );
  expect(count).toBe(3);
});
