import * as glide from "../glide";

import repeat from "lodash/repeat";

export default glide
  .columnNamed("Repeat Text")
  .withCategory("Text")
  .withDescription(`Repeats the given string n times.`)
  .withAuthor("lodash Project", "lodash.com")
  .withStringResult()
  .withStringParam("text")
  .withNumberParam("n", "Repetitions")
  .withExample({ text: `*`, n: 8 })
  .run(({ text, n }) => (text === undefined ? undefined : repeat(text, n)));
