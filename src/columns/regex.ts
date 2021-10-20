import * as glide from "../glide";

export default glide
  .columnNamed("Extract Matching Text")
  .withDescription("Extract text matching a regular expression.")
  .withStringResult()
  .withStringParam("text")
  .withStringParam("regex", "Regular Expression")
  .withExample({ text: `Hello, world.`, regex: "Hello, (.+)." })
  .run(({ text, regex }) => {
    if (regex === undefined) {
      return undefined;
    }
    text?.match(regex)?.[1];
  });
