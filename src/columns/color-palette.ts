import * as glide from "../glide";

import chroma from "chroma-js";

export default glide
  .columnNamed("Color Palette")
  .withCategory("Image")
  .withReleased("direct")
  .withDescription(`Create a palette of colors from a start and end color.`)
  .withStringArrayResult()
  .withRequiredStringParam("start", "Start Color")
  .withRequiredStringParam("end", "End Color")
  .withRequiredNumberParam("number", "Number of Colors")

  .withTest({ start: "#123456", end: "#fedcba", number: 5 }, [
    "#123456",
    "#665276",
    "#a9768b",
    "#dca59d",
    "#fedcba",
  ])
  .withTest({ start: "#fff", end: "#000", number: 5 }, [
    "#ffffff",
    "#b9b9b9",
    "#777777",
    "#3b3b3b",
    "#000000",
  ])

  .run(({ start, end, number }) => {
    try {
      const s = chroma(start);
      const e = chroma(end);
      return chroma.scale([s, e]).mode("lch").colors(number);
    } catch {
      return undefined;
    }
  });
