import * as glide from "../glide";

import padStart from "lodash/padStart";

export default glide
  .columnNamed("Pad Text at Start")
  .withCategory("Text")

  .withDescription(
    `Pads string on the left side if it's shorter than length. Padding characters are truncated if they exceed length.`
  )
  .withAuthor("lodash Project", "lodash.com")
  .withStringResult()
  .withStringParam("text")
  .withNumberParam("length")
  .withStringParam("chars", "Padding")
  .withExample({ text: `abc`, length: 8 })
  .run(({ text, length, chars }) =>
    text === undefined ? undefined : padStart(text, length, chars)
  );
