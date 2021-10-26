import * as glide from "../glide";

import * as chroma from "chroma-js";

export default glide
  .columnNamed("Image from color")
  .withCategory("Image")
  .withDescription("Get an image based on a CSS color.")
  .withAbout(
    "You can use any valid [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)."
  )
  .withReleased("direct")

  .withRequiredStringParam("color", "Color")
  .withNumberParam("size", "Image size (in pixels)")
  .withResult("image-uri")

  .withTest(
    { color: "hotpink", size: 500 },
    `https://www.colorbook.io/imagecreator.php?hex=ff69b4&width=500&height=500`
  )
  .withTest(
    { color: "#fafafa" },
    `https://www.colorbook.io/imagecreator.php?hex=fafafa&width=400&height=400`
  )
  .withTest({ color: "This-is-not-a-color!" }, undefined)

  .run(({ color, size }) => {
    try {
      const chromaColor = chroma.default(color);
      const hexColor = chromaColor.hex("auto").slice(1);
      const clampedSize = Math.max(0, Math.min(2000, size ?? 400));

      return `https://www.colorbook.io/imagecreator.php?hex=${hexColor}&width=${clampedSize}&height=${clampedSize}`;
    } catch {
      return undefined;
    }
  });
