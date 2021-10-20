import * as glide from "../glide";

import startCase from "lodash/startCase";

export default glide
  .columnNamed("Start Case")
  .withDescription(`"hello world" → "Hello World"`)
  .withStringResult()
  .withStringParam("text")
  .withExample({ text: `helloWorld` })
  .run(({ text }) => (text === undefined ? undefined : startCase(text)));
