import * as glide from "../glide";

import kebabCase from "lodash/kebabCase";

export default glide
  .columnNamed("Kebab Case")
  .withCategory("Text")
  .withDescription(`"hello world" → "hello-world"`)
  .withAuthor("lodash Project", "lodash.com")
  .withStringResult()
  .withStringParam("text")
  .withExample({ text: `helloWorld` })
  .run(({ text }) => (text === undefined ? undefined : kebabCase(text)));
