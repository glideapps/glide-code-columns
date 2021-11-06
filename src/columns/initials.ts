import * as glide from "../glide";

export default glide
    .columnNamed("Initials")
    .withCategory("Text")
    .withReleased("direct")
    .withDescription(`Indicates whether text is an email.`)

    .withRequiredStringParam("text")
    .withStringParam("separator")
    .withBooleanParam("ignoreLowercase")
    .withStringResult()

    .withTest({ text: `Hello World` }, "HW")
    .withTest({ text: `Hello` }, "H")
    .withTest({ text: `Hello World`, separator: "." }, "H.W.")

    .withTest({ text: `Hello the World`, separator: "." }, "H.t.W.")
    .withTest({ text: `Hello the World`, separator: ".", ignoreLowercase: true }, "H.W.")
    .withTest({ text: `Hello the World`, separator: ".", ignoreLowercase: false }, "H.t.W.")

    .run(({ text, separator = "", ignoreLowercase = false }) => {
        const words = text
            .split(" ")
            .map(x => x.slice(0, 1))
            .filter(i => !ignoreLowercase || i === i.toLocaleUpperCase());
        const ending = words.length > 1 ? separator : "";
        return words.join(separator) + ending;
    });
