import * as glide from "../glide";

import chroma from "chroma-js";
import svgToMiniDataURI from "mini-svg-data-uri";

function getSvgForColor(color: string) {
    return svgToMiniDataURI(`
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200" xml:space="preserve" height="200px" width="200px">
      <rect width="200" height="200" style="fill:${color};" />
    </svg>`);
}

export default glide
    .columnNamed("Image from Color")
    .withCategory("Image")
    .withReleased("direct")
    .withDescription("Get an image based on a CSS color.")
    .withAbout("You can use any valid [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color).")
    .withReleased("direct")

    .withRequiredStringParam("color", "Color")
    .withImageResult()

    // This test is stupid, but it sets an example
    .withTest({ color: "hotpink" }, getSvgForColor("#ff69b4"))
    .withTest({ color: "This-is-not-a-color!" }, undefined)

    .run(({ color }) => {
        try {
            const chromaColor = chroma(color);
            const hexColor = chromaColor.hex("auto");

            return getSvgForColor(hexColor);
        } catch {
            return undefined;
        }
    });
