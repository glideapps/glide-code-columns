import * as glide from "../glide";

import pad from "lodash/pad";

export default glide
  .columnNamed("Pad Text")
  .withCategory("Text")
  .withDescription(
    `Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.`
  )
  .withAuthor("lodash Project", "lodash.com")
  .withStringResult()
  .withStringParam("text")
  .withNumberParam("length")
  .withStringParam("chars", "Padding")
  .withExample({ text: `abc`, length: 8 })
  .run(({ text, length, chars }) =>
    text === undefined ? undefined : pad(text, length, chars)
  );
