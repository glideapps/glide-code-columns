import * as glide from "../glide";

type Encoder = (x: string) => string;

export const encodingTypes = ["base64", "url"] as const;

export type EncodingType = typeof encodingTypes[number];

type Encoding = {
  encode: Encoder | undefined;
  decode: Encoder | undefined;
};

function getEncoding(type: EncodingType): Encoding {
  switch (type) {
    case "base64":
      return {
        encode: btoa.bind(window),
        decode: atob.bind(window),
      };
    case "url":
      return {
        encode: encodeURIComponent,
        decode: decodeURIComponent,
      };
  }
}

export function encode(s: string, t: EncodingType): string | undefined {
  return getEncoding(t)?.encode?.(s);
}

export function decode(s: string, t: EncodingType): string | undefined {
  return getEncoding(t)?.decode?.(s);
}

export default glide
  .columnNamed("Encode Text")
  .withCategory("Encoding")
  .withDescription("Encode text in a variety of formats.")

  .withRequiredStringParam("text")
  .withStringParam("encoding", `Encoding (${encodingTypes.join(", ")})`)
  .withStringResult()

  .withTest({ text: `Hello, world!` }, "SGVsbG8sIHdvcmxkIQ==")
  .withTest(
    { text: `Hello, world!`, encoding: "base64" },
    "SGVsbG8sIHdvcmxkIQ=="
  )
  .withTest({ text: `Hello, world!`, encoding: "url" }, "Hello%2C%20world!")

  .run(({ text, encoding = "base64" }) =>
    encode(text, encoding as EncodingType)
  );
