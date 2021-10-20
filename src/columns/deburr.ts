import * as glide from "../glide";

import deburr from "lodash/deburr";

export default glide
  .columnNamed("Deburr Text", "Text")
  .withDescription(
    `Deburrs string by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and removing combining diacritical marks.`
  )
  .withAuthor("lodash Project", "lodash.com")
  .withStringResult()
  .withStringParam("text")
  .withExample({ text: `déjà vu` })
  .run(({ text }) => (text === undefined ? undefined : deburr(text)));
