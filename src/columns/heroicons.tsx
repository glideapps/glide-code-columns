import * as glide from "../glide";
import * as React from "react";

import { render } from "react-dom";
import { BeakerIcon } from "@heroicons/react/solid";

import JsBarcode from "jsbarcode";
import svgToMiniDataURI from "mini-svg-data-uri";

function barcode(props: { content: string }): string {
    const { content } = props;
    const result = React.render(<BeakerIcon />);

    const parent = document.createElement("div");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    parent.appendChild(svg);

    JsBarcode(svg, content);
    return svgToMiniDataURI(parent.innerHTML);
}

export default glide
    .columnNamed("Hero Icons")
    .withCategory("Image")
    .withReleased("direct")
    .withDescription("Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.")

    .withRequiredStringParam("name")
    .withImageResult()

    .run(({ name }) => barcode({ content }));
