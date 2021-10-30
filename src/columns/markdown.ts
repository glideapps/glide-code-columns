import * as glide from "../glide";

import marked from "marked";

export default glide
    .columnNamed("Markdown to HTML")
    .withCategory("Text")
    .withReleased("direct")

    .withDescription(`Convert markdown to HTML.`)

    .withRequiredStringParam("markdown")
    .withStringResult()

    .withTest({ markdown: `*Hello*` }, "<p><em>Hello</em></p>\n")
    .run(({ markdown }) => marked(markdown));
