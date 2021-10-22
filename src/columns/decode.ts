import * as glide from "../glide";

export default glide
  .columnNamed("Base64 Decode")
  .withCategory("Encoding")
  .withDescription("A common binary encoding for text.")
  .withStringResult()
  .withRequiredStringParam("text")
  .withTest({ text: `SGVsbG8sIHdvcmxkIQ==` }, "Hello, world!")
  .run(({ text }) => atob(text));
