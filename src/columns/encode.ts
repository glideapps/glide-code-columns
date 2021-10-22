import * as glide from "../glide";

export default glide
  .columnNamed("Base64 Encode")
  .withCategory("Encoding")
  .withDescription("A common binary encoding for text.")

  .withRequiredStringParam("text")
  .withStringResult()

  .withTest({ text: `Hello, world!` }, "SGVsbG8sIHdvcmxkIQ==")

  .run(({ text }) => btoa(text));
