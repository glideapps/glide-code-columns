import * as glide from "../glide";

export default glide
  .columnNamed("Extract Matching Text")
  .withCategory("Text")
  .withDescription("Extract text matching a regular expression.")

  .withStringParam("text")
  .withStringParam("regex", "Regular Expression")
  .withStringResult()

  .withTest({ text: `Hello, world.`, regex: "Hello, (.+)." }, "world")

  .run(({ text, regex }) => {
    if (regex === undefined) {
      return undefined;
    }
    return text?.match(regex)?.[1];
  });
