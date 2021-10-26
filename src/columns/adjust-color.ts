import * as glide from "../glide";

import chroma from "chroma-js";

export default glide
  .columnNamed("Adjust Color")
  .withCategory("Image")
  .withDescription(
    `Modifies a color by brightening, darkening, saturating, and adjusting transparency.`
  )
  .withStringResult()
  .withRequiredStringParam("color")
  .withNumberParam("brighten")
  .withNumberParam("saturate")
  .withNumberParam("luminance")
  .withNumberParam("transparency")

  .withTest(
    {
      color: "#123456",
      brighten: 0.5,
      saturate: 1.2,
      luminance: 0.8,
      transparency: 0.7,
    },
    "#dfe8f1b3"
  )
  .withTest(
    {
      color: "#123456",
      brighten: 0.5,
      saturate: 1,
      luminance: 0.8,
      transparency: 0.7,
    },
    "#dfe8f0b3"
  )
  .withTest(
    {
      color: "#123456",
      brighten: 0,
      saturate: 0,
      luminance: undefined,
      transparency: undefined,
    },
    "#123456"
  )

  .run(({ color, brighten = 0, saturate = 0, luminance, transparency }) => {
    try {
      let c = chroma(color).brighten(brighten).saturate(saturate);
      if (luminance !== undefined) {
        c = c.luminance(luminance);
      }
      if (transparency !== undefined) {
        c = c.alpha(transparency);
      }
      return c.hex();
    } catch {
      return undefined;
    }
  });
