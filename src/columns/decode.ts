import * as glide from "../glide";

export default glide
  .columnNamed("Base64 Decode", "Encoding")
  .withDescription("A common binary encoding for text.")
  .withStringResult()
  .withRequiredStringParam("text")
  .withExample({ text: `SGVsbG8sIHdvcmxkIQ==` })
  .run(({ text }) => atob(text));
