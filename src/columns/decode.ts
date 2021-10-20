import * as glide from "../glide";

export default glide
  .columnNamed("Base64 Decode")
  .withDescription("A common binary encoding for text.")
  .withStringResult()
  .withStringParam("text")
  .withExample({ text: `SGVsbG8sIHdvcmxkIQ==` })
  .runRequired(({ text }) => atob(text));
