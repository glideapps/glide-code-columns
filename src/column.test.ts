import main from "./column";

test("We can get an echo", async () => {
  const response = await main({ type: "string", value: "foo" });
  expect(response).toBe("echo foo");
});
