import * as glide from "../glide";

import startCase from "lodash/startCase";

export default glide
  .columnNamed("Start Case")
  .withCategory("Text")
  .withDescription(`"hello world" → "Hello World"`)
  .withAuthor("lodash Project", "lodash.com")

  .withRequiredStringParam("text")
  .withStringResult()

  .withTest({ text: `helloWorld` }, "Hello World")

  .run(({ text }) => startCase(text));
