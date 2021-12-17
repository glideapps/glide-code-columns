import * as glide from "../glide";

export default glide
    .columnNamed("Uppercase Text")
    .withCategory("Text")
    .withReleased("direct")
    .withDescription(`Converts string to upper case.`)

    .withRequiredStringParam("text")
    .withStringResult()

    .withTest({ text: `Hello, WORLD!` }, "HELLO, WORLD!")
    .withTest({ text: `--Foo-Bar--` }, "--FOO-BAR--")

    .run(({ text }) => text.toLocaleUpperCase());
