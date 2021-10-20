import * as glide from "../glide";

export default glide
  .columnNamed("Base64 Encode")
  .withDescription("A common binary encoding for text.")
  .withStringResult()
  .withStringParam("text")
  .withExample({ text: `Hello, world!` })
  .run(({ text }) => (text === undefined ? undefined : btoa(text)));
