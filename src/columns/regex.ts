import * as glide from "../glide";

export default glide
  .columnNamed("Extract Matching Text")
  .withDescription("Extract text matching a regular expression.")
  .withStringResult()
  .withStringParam("text")
  .withStringParam("regex")
  .withExample({ text: `Hello, world.`, regex: "Hello, (.+)." })
  .run(({ text, regex }) => text?.match(regex)?.[1]);
