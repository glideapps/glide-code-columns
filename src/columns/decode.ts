import * as glide from "../glide";
import { encodings, encodingTypes } from "./encode";

export default glide
  .columnNamed("Decode Text")
  .withCategory("Encoding")
  .withDescription("A common binary encoding for text.")

  .withRequiredStringParam("text")
  .withStringParam("encoding", `Encoding (${encodingTypes.join(", ")})`)
  .withStringResult()

  .withTest({ text: "SGVsbG8sIHdvcmxkIQ==" }, `Hello, world!`)
  .withTest(
    { text: "SGVsbG8sIHdvcmxkIQ==", encoding: "base64" },
    `Hello, world!`
  )
  .withTest({ text: "Hello%2C%20world!", encoding: "url" }, `Hello, world!`)

  .run(({ text, encoding = "base64" }) => {
    if (!encodingTypes.includes(encoding)) return undefined;

    const { decode } = encodings[encoding];
    return decode?.(text);
  });
