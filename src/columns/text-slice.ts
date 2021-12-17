import * as glide from "../glide";

export default glide
    .columnNamed("Text Slice")
    .withReleased("direct")
    .withCategory("Text")
    .withDescription(`Gets a substring out of text, from zero-indexed "start" with an optional length`)
    .withStringResult()
    .withRequiredStringParam("text")
    .withRequiredNumberParam("start")
    .withNumberParam("length")
    .withTest({ text: "substring this", start: 0 }, "substring this")
    .withTest({ text: "substring this", start: 3 }, "string this")
    .withTest({ text: "substring this", start: 3, length: 6 }, "string")
    .withTest({ text: "substring this", start: 0, length: 3 }, "sub")
    .run(({ text, start, length }) => text.substring(start, length === undefined ? undefined : length + start));
