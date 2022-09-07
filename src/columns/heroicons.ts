import * as glide from "../glide";

import React from "react";
import ReactDOMServer from "react-dom/server";
import * as Solid from "@heroicons/react/24/solid";
import * as Outline from "@heroicons/react/24/outline";
import * as Mini from "@heroicons/react/20/solid";

import svgToMiniDataURI from "mini-svg-data-uri";
import camelCase from "lodash/camelCase";
import upperFirst from "lodash/upperFirst";

const defaultIcon = "Beaker";

const iconsRenamedInV2 = {
    adjustments: "adjustments-vertical",
    annotation: "chat-bubble-bottom-center-text",
    archive: "archive-box",
    "arrow-circle-down": "arrow-down-circle",
    "arrow-circle-left": "arrow-left-circle",
    "arrow-circle-right": "arrow-right-circle",
    "arrow-circle-up": "arrow-up-circle",
    "arrow-narrow-down": "arrow-long-down",
    "arrow-narrow-left": "arrow-long-left",
    "arrow-narrow-right": "arrow-long-right",
    "arrow-narrow-up": "arrow-long-up",
    "arrow-sm-left": "arrow-small-left",
    "arrow-sm-right": "arrow-small-right",
    "arrow-sm-up": "arrow-small-up",
    "arrow-sm-down": "arrow-small-down",
    "arrows-expand": "arrows-pointing-out",
    "badge-check": "check-badge",
    ban: "no-symbol",
    "bookmark-alt": "bookmark-square",
    cash: "banknotes",
    "chart-square-bar": "chart-bar-square",
    "chat-alt-2": "chat-bubble-left-right",
    "chat-alt": "chat-bubble-left-ellipsis",
    chat: "chat-bubble-oval-left-ellipsis",
    chip: "cpu-chip",
    "clipboard-check": "clipboard-document-check",
    "clipboard-copy": "clipboard-document",
    "clipboard-list": "clipboard-document-list",
    "cloud-download": "cloud-arrow-down",
    "cloud-upload": "cloud-arrow-up",
    code: "code-bracket",
    collection: "rectangle-stack",
    "color-swatch": "swatch",
    "cursor-click": "cursor-arrow-rays",
    database: "circle-stack",
    "desktop-computer": "computer-desktop",
    "device-mobile": "device-phone-mobile",
    "document-add": "document-plus",
    "document-download": "document-arrow-down",
    "document-remove": "document-minus",
    "document-report": "document-chart-bar",
    "document-search": "document-magnifying-glass",
    "dots-circle-horizontal": "ellipsis-horizontal-circle",
    "dots-horizontal": "ellipsis-horizontal",
    "dots-vertical": "ellipsis-vertical",
    download: "arrow-down-tray",
    duplicate: "square-2-stack",
    "emoji-happy": "face-smile",
    "emoji-sad": "face-frown",
    "external-link": "arrow-top-right-on-square",
    "eye-off": "eye-slash",
    "fast-forward": "forward",
    filter: "funnel",
    "folder-add": "folder-plus",
    "folder-download": "folder-arrow-down",
    "folder-remove": "folder-minus",
    globe: "globe-americas",
    hand: "hand-raised",
    "inbox-in": "inbox-arrow-down",
    library: "building-library",
    "lightning-bolt": "bolt",
    "location-marker": "map-pin",
    login: "arrow-left-on-rectangle",
    logout: "arrow-right-on-rectangle",
    "mail-open": "envelope-open",
    mail: "envelope",
    "menu-alt-1": "bars-3-center-left",
    "menu-alt-2": "bars-3-bottom-left",
    "menu-alt-3": "bars-3-bottom-right",
    "menu-alt-4": "bars-2",
    menu: "bars-3",
    "minus-sm": "minus-small",
    "music-note": "musical-note",
    "office-building": "building-office",
    "pencil-alt": "pencil-square",
    "phone-incoming": "phone-arrow-down-left",
    "phone-missed-call": "phone-x-mark",
    "phone-outgoing": "phone-arrow-up-right",
    photograph: "photo",
    "plus-sm": "plus-small",
    puzzle: "puzzle-piece",
    qrcode: "qr-code",
    "receipt-tax": "receipt-percent",
    refresh: "arrow-path",
    reply: "arrow-uturn-left",
    rewind: "backward",
    "save-as": "arrow-down-on-square-stack",
    save: "arrow-down-on-square",
    "search-circle": "magnifying-glass-circle",
    search: "magnifying-glass",
    selector: "chevron-up-down",
    "sort-ascending": "bars-arrow-up",
    "sort-descending": "bars-arrow-down",
    speakerphone: "megaphone",
    "status-offline": "signal-slash",
    "status-online": "signal",
    support: "lifebuoy",
    "switch-horizontal": "arrows-right-left",
    "switch-vertical": "arrows-up-down",
    table: "table-cells",
    template: "rectangle-group",
    terminal: "command-line",
    "thumb-down": "hand-thumb-down",
    "thumb-up": "hand-thumb-up",
    translate: "language",
    "trending-down": "arrow-trending-down",
    "trending-up": "arrow-trending-up",
    upload: "arrow-up-tray",
    "user-add": "user-plus",
    "user-remove": "user-minus",
    "view-boards": "view-columns",
    "view-grid-add": "squares-plus",
    "view-grid": "squares-2x2",
    "view-list": "bars-4",
    "volume-off": "speaker-x-mark",
    "volume-up": "speaker-wave",
    x: "x-mark",
    "zoom-in": "magnifying-glass-plus",
    "zoom-out": "magnifying-glass-minus",
};

export default glide
    .columnNamed("Hero Icons")
    .withCategory("Image")
    .withReleased("direct")
    .withDescription("Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.")

    .withRequiredStringParam("name", "Name (See heroicons.com)")
    .withStringParam("style", "Style (solid, outline, mini)")
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
            name: legacyName,
            color = "currentColor",
            style = "solid",
            backgroundColor = "transparent",
            size = 128,
            padding = 20,
        }) => {
            const name = iconsRenamedInV2[legacyName] ?? legacyName;
            const properName = name.endsWith("Icon") ? name : upperFirst(camelCase(name)) + "Icon";
            const collection = { solid: Solid, outline: Outline, mini: Mini }[style] ?? Solid;
            let component = collection[properName] ?? collection[defaultIcon];

            if (component === undefined) return undefined;

            const baseSize = style === "mini" ? 20 : 24;
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
