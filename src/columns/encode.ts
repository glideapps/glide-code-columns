import * as glide from "../glide";
import { withWindow } from "../util";

type Encoder = (x: string) => string;

type Encoding = {
  encode: Encoder | undefined;
  decode: Encoder | undefined;
};

export const encodings: Record<string, Encoding> = {
  base64: {
    encode: withWindow(w => w.btoa),
    decode: withWindow(w => w.atob),
  },
  url: {
    encode: encodeURIComponent,
    decode: decodeURIComponent,
  },
};

export const encodingTypes = Object.keys(encodings);

export default glide
  .columnNamed("Encode Text")
  .withCategory("Encoding")
  .withDescription("A common binary encoding for text.")

  .withRequiredStringParam("text")
  .withStringParam("encoding", `Encoding (${encodingTypes.join(", ")})`)
  .withStringResult()

  .withTest({ text: `Hello, world!` }, "SGVsbG8sIHdvcmxkIQ==")
  .withTest(
    { text: `Hello, world!`, encoding: "base64" },
    "SGVsbG8sIHdvcmxkIQ=="
  )
  .withTest({ text: `Hello, world!`, encoding: "url" }, "Hello%2C%20world!")

  .run(({ text, encoding = "base64" }) => {
    if (!encodingTypes.includes(encoding)) return undefined;

    const { encode } = encodings[encoding];
    return encode?.(text);
  });
