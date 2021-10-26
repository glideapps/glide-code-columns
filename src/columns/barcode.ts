import * as glide from "../glide";

import JsBarcode from "jsbarcode";
import svgToMiniDataURI from "mini-svg-data-uri";

function barcode(props: { content: string }): string {
    const { content } = props;

    const parent = document.createElement("div");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    parent.appendChild(svg);

    JsBarcode(svg, content);
    return svgToMiniDataURI(parent.innerHTML);
}

export default glide
    .columnNamed("Barcode")
    .withCategory("Image")
    .withReleased("direct")
    .withDescription("Generate barcodes.")
    .withAuthor("lindell", "github.com/lindell/JsBarcode")
    .withAbout(
        `
        JsBarcode is a barcode generator written in JavaScript. It supports multiple barcode formats and works in browsers and with Node.js.
    
    Learn more at [lindell.me/JsBarcode](https://lindell.me/JsBarcode/).
    `
    )

    .withRequiredStringParam("content")
    .withImageResult()

    .run(({ content }) => barcode({ content }));
