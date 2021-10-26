import * as glide from "../glide";

export default glide
    .columnNamed("Text Length")
    .withCategory("Text")
    .withReleased("direct")
    .withDescription(`Gets the length of a text snippet`)
    .withNumberResult()
    .withRequiredStringParam("text")
    // FIXME: Length of naughty strings
    .withTest({ text: "This is some text" }, 17)
    .run(({ text }) => text.length);
