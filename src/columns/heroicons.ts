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
    .withNumberParam("size")
    .withNumberParam("padding")

    .withImageResult()

    .withFailingTest(
        {
            name: "beaker",
            style: "outline",
            color: "#F8F8F8",
            backgroundColor: "#007D8E",
            size: 200,
            padding: 40,
        },
        undefined
    )

    .run(
        ({
            name,
            color = "currentColor",
            style = "solid",
            backgroundColor = "transparent",
            size = 128,
            padding = 20,
        }) => {
            const properName = name.endsWith("Icon") ? name : upperFirst(camelCase(name)) + "Icon";
            const collection = style === "solid" ? Solid : Outline;
            let component = collection[properName] ?? collection[defaultIcon];

            if (component === undefined) return undefined;

            const baseSize = style === "solid" ? 20 : 24;
            const inset = baseSize * (padding / size);
            const icon = React.createElement(component, {
                color,
                height: size,
                width: size,
                viewBox: [-inset, -inset, baseSize + 2 * inset, baseSize + 2 * inset].join(","),
                style: {
                    backgroundColor,
                },
            });
            const svg = ReactDOMServer.renderToString(icon);
            return svgToMiniDataURI(svg);
        }
    );
