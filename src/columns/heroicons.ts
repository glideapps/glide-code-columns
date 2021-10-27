import * as glide from "../glide";

import React from "react";
import ReactDOMServer from "react-dom/server";
import * as Solid from "@heroicons/react/solid";
import * as Outline from "@heroicons/react/outline";

import svgToMiniDataURI from "mini-svg-data-uri";
import camelCase from "lodash/camelCase";
import upperFirst from "lodash/upperFirst";

const defaultIcon = "Beaker";

export default glide
    .columnNamed("Hero Icons")
    .withCategory("Image")
    .withReleased("direct")
    .withDescription("Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.")

    .withRequiredStringParam("name", "Name (See heroicons.com)")
    .withStringParam("style", "Style (solid, outline)")
    .withNumberParam("size")

    .withStringParam("color")
    .withStringParam("backgroundColor")

    .withImageResult()

    .withFailingTest({ name: "beaker", style: "outline", color: "#0FD452", size: 128 }, undefined)

    .run(({ name, color = "currentColor", style = "solid", backgroundColor = "transparent", size = 100 }) => {
        const properName = upperFirst(camelCase(name)) + "Icon";
        const collection = style === "solid" ? Solid : Outline;
        let component = collection[properName] ?? collection[defaultIcon];

        if (component === undefined) return undefined;

        const icon = React.createElement(component, {
            color,
            height: size,
            width: size,
            style: { backgroundColor },
        });
        const svg = ReactDOMServer.renderToString(icon);
        return svgToMiniDataURI(svg);
    });
