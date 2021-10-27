import * as glide from "../glide";

import React from "react";
import ReactDOMServer from "react-dom/server";
import * as Solid from "@heroicons/react/solid";
import * as Outline from "@heroicons/react/outline";

import svgToMiniDataURI from "mini-svg-data-uri";
import camelCase from "lodash/camelCase";
import upperFirst from "lodash/upperFirst";

const defaultIcon = "beaker";

export default glide
    .columnNamed("Hero Icons")
    .withCategory("Image")
    .withReleased("direct")
    .withDescription("Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.")

    .withRequiredStringParam("name", "Name (See heroicons.com)")
    .withStringParam("color")
    .withStringParam("style", "Style (solid, outline)")
    .withImageResult()

    .withFailingTest({ name: "david" }, undefined)

    .run(({ name, color = "black", style = "solid" }) => {
        const properName = upperFirst(camelCase(name));
        const collection = style === "solid" ? Solid : Outline;
        const component = collection[properName] ?? collection[defaultIcon];
        const icon = React.createElement(component, { color });
        const svg = ReactDOMServer.renderToString(icon);
        return svgToMiniDataURI(svg);
    });
