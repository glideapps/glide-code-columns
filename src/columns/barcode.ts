import * as glide from "../glide";

import JsBarcode from "jsbarcode";
import svgToMiniDataURI from "mini-svg-data-uri";

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
    .withStringParam("format", "Format - see https://github.com/lindell/JsBarcode")
    .withImageResult()

    .withFailingTest(
        {
            content: "0123456890",
            format: "CODE128"
        },
        "data:image/svg+xml,%3csvg width='200px' height='142px' x='0px' y='0px' viewBox='0 0 200 142' xmlns='http://www.w3.org/2000/svg' version='1.1' style='transform: translate(0%2c0)'%3e%3crect x='0' y='0' width='200' height='142' style='fill:white%3b'%3e%3c/rect%3e%3cg transform='translate(10%2c 10)' style='fill:black%3b'%3e%3crect x='0' y='0' width='4' height='100'%3e%3c/rect%3e%3crect x='6' y='0' width='2' height='100'%3e%3c/rect%3e%3crect x='12' y='0' width='6' height='100'%3e%3c/rect%3e%3crect x='22' y='0' width='4' height='100'%3e%3c/rect%3e%3crect x='30' y='0' width='4' height='100'%3e%3c/rect%3e%3crect x='36' y='0' width='4' height='100'%3e%3c/rect%3e%3crect x='44' y='0' width='6' height='100'%3e%3c/rect%3e%3crect x='52' y='0' width='4' height='100'%3e%3c/rect%3e%3crect x='58' y='0' width='6' height='100'%3e%3c/rect%3e%3crect x='66' y='0' width='2' height='100'%3e%3c/rect%3e%3crect x='70' y='0' width='6' height='100'%3e%3c/rect%3e%3crect x='78' y='0' width='4' height='100'%3e%3c/rect%3e%3crect x='88' y='0' width='2' height='100'%3e%3c/rect%3e%3crect x='98' y='0' width='2' height='100'%3e%3c/rect%3e%3crect x='104' y='0' width='4' height='100'%3e%3c/rect%3e%3crect x='110' y='0' width='4' height='100'%3e%3c/rect%3e%3crect x='116' y='0' width='8' height='100'%3e%3c/rect%3e%3crect x='126' y='0' width='4' height='100'%3e%3c/rect%3e%3crect x='132' y='0' width='2' height='100'%3e%3c/rect%3e%3crect x='138' y='0' width='2' height='100'%3e%3c/rect%3e%3crect x='144' y='0' width='8' height='100'%3e%3c/rect%3e%3crect x='154' y='0' width='4' height='100'%3e%3c/rect%3e%3crect x='164' y='0' width='6' height='100'%3e%3c/rect%3e%3crect x='172' y='0' width='2' height='100'%3e%3c/rect%3e%3crect x='176' y='0' width='4' height='100'%3e%3c/rect%3e%3ctext style='font: 20px monospace' text-anchor='middle' x='90' y='122'%3e0123456890%3c/text%3e%3c/g%3e%3c/svg%3e"
    )

    .run(({ content, format }) => {
        const codeFormat = format ?? "CODE128";
    
        const parent = document.createElement("div");
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        parent.appendChild(svg);
    
        JsBarcode(svg, content, {format: codeFormat});
        return svgToMiniDataURI(parent.innerHTML);
    });
