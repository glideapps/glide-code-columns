import * as glide from "../glide";

import repeat from "lodash/repeat";

export default glide
  .columnNamed("Repeat Text")
  .withCategory("Text")
  .withDescription(`Repeats the given string n times.`)
  .withAuthor("lodash Project", "lodash.com")

  .withRequiredStringParam("text")
  .withRequiredNumberParam("n", "Repetitions")
  .withStringResult()

  .withTest({ text: `*`, n: 8 }, "********")

  .run(({ text, n }) => repeat(text, n));
