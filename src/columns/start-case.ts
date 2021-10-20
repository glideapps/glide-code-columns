import * as glide from "../glide";

import startCase from "lodash/startCase";

export default glide
  .columnNamed("Start Case", "Text")
  .withDescription(`"hello world" → "Hello World"`)
  .withAuthor("lodash Project", "lodash.com")
  .withStringResult()
  .withStringParam("text")
  .withExample({ text: `helloWorld` })
  .run(({ text }) => (text === undefined ? undefined : startCase(text)));
