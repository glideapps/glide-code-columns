import * as glide from "../glide";

import chroma from "chroma-js";

export default glide
  .columnNamed("Color Palette")
  .withCategory("Image")
  .withReleased("direct")
  .withDescription(`Create a palette of colors from a start and end color.`)
  .withIcon(`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
</svg>`)

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
