import * as glide from "../glide";

export default glide
  .columnNamed("Trim Whitespace", "Text")
  .withDescription("Remove whitespace around text.")
  .withStringResult()
  .withStringParam("text")
  .withExample({ text: ` hello ` })
  .run(({ text }) => text?.trim());
