import * as glide from "../glide";

import capitalize from "lodash/capitalize";

export default glide
  .columnNamed("Capitalize Text")
  .withCategory("Text")
  .withDescription(
    `Converts the first character of string to upper case and the remaining to lower case.`
  )
  .withAuthor("lodash Project", "lodash.com")
  .withStringResult()
  .withRequiredStringParam("text")
  .withExample({ text: `HELLO` })

  .withTest({ text: `HELLO` }, "Hello")

  .run(({ text }) => capitalize(text));
