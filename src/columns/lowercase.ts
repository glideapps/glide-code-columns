import * as glide from "../glide";

import lowerCase from "lodash/lowerCase";

export default glide
  .columnNamed("Lowercase Text")
  .withCategory("Text")
  .withDescription(`Converts string, as space separated words, to lower case.`)
  .withAuthor("lodash Project", "lodash.com")
  .withStringResult()
  .withStringParam("text")
  .withTest({ text: `--Foo-Bar--` }, "foo bar")
  .run(({ text }) => (text === undefined ? undefined : lowerCase(text)));
