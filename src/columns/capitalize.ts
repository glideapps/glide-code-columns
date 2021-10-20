import * as glide from "../glide";

import capitalize from "lodash/capitalize";

export default glide
  .columnNamed("Capitalize Text", "Text")
  .withDescription(
    `Converts the first character of string to upper case and the remaining to lower case.`
  )
  .withAuthor("lodash Project", "lodash.com")
  .withStringResult()
  .withStringParam("text")
  .withExample({ text: `HELLO` })
  .run(({ text }) => (text === undefined ? undefined : capitalize(text)));
