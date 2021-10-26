import * as glide from "../glide";

export default glide
    .columnNamed("Trim Whitespace")
    .withCategory("Text")
    .withReleased("direct")
    .withDescription("Remove whitespace around text.")

    .withRequiredStringParam("text")
    .withStringResult()

    .withTest({ text: ` hello ` }, "hello")

    .run(({ text }) => text.trim());
