import * as glide from "../glide";
import { url } from "../urls";

// TODO support more from https://www.ruggedtabletpc.com/barcode-generator

enum Symbology {
  UPC_A = "UPC_A",
}

const run: glide.Column = async (dataValue, sizeValue) => {
  const { value: content } = dataValue;
  const { value: size = 500 } = sizeValue;

  if (content === undefined) {
    return undefined;
  }

  return url(`https://mobiledemand-barcode.azurewebsites.net/barcode/image`, {
    content,
    size,
    symbology: Symbology.UPC_A,
    format: "png",
    text: true,
  });
};

export default glide.column({
  name: "Barcode",
  description: "Generates barcode images",
  about: `
      Uses [ruggedtabletpc.com](https://ruggedtabletpc.com) to generate images of barcodes.

      Only supports 11-digit barcodes for now.
    `,
  author: "David Siegel <david@glideapps.com>",
  params: {
    content: {
      displayName: "Content",
      type: "primitive",
    },
    size: {
      displayName: "Size",
      type: "number",
    },
  },
  example: { content: 12345678910, size: 250 },
  result: { type: "image-uri" },
  run,
  icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4H1V44H3V4Z" fill="currentColor"/>
    <path d="M47 4H45V44H47V4Z" fill="currentColor"/>
    <path d="M8 4H6V39H8V4Z" fill="currentColor"/>
    <path d="M42 4H40V39H42V4Z" fill="currentColor"/>
    <path d="M37 4H35V39H37V4Z" fill="currentColor"/>
    <path d="M18 4H11V39H18V4Z" fill="currentColor"/>
    <path d="M33 4H27V39H33V4Z" fill="currentColor"/>
    <path d="M24 4H21V39H24V4Z" fill="currentColor"/>
    </svg>`,
});
