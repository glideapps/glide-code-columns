import * as glide from "../glide";

import pad from "lodash/pad";

export default glide
  .columnNamed("Pad Text")
  .withCategory("Text")
  .withDescription(
    `Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.`
  )
  .withAuthor("lodash Project", "lodash.com")

  .withRequiredStringParam("text")
  .withNumberParam("length")
  .withStringParam("chars", "Padding")
  .withStringResult()

  .withTest({ text: `abc`, length: 8 }, "  abc   ")

  .run(({ text, length, chars }) => pad(text, length, chars));
