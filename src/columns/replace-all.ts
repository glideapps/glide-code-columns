import * as glide from "../glide";

export default glide
    .columnNamed("Replace All")
    .withCategory("Text")
    .withReleased("direct")
    .withDescription(`Replace every occurrence of some text with some other text.`)

    .withRequiredStringParam("text")
    .withRequiredStringParam("x", "Replace This")
    .withRequiredStringParam("y", "With This")
    .withStringResult()

    .withTest({ text: `Hello, world.`, x: "world", y: "universe" }, "Hello, universe.")

    .run(({ text, x, y }) => text.replace(new RegExp(x, "g"), y));
