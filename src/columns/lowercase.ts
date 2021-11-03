import * as glide from "../glide";

export default glide
    .columnNamed("Lowercase Text")
    .withCategory("Text")
    .withReleased("direct")
    .withDescription(`Converts string to lower case.`)

    .withRequiredStringParam("text")
    .withStringResult()

    .withTest({ text: `Hello, WORLD!` }, "hello, world!")
    .withTest({ text: `--Foo-Bar--` }, "--foo-bar--")

    .run(({ text }) => text.toLocaleLowerCase());
