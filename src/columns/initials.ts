import * as glide from "../glide";

export default glide
    .columnNamed("Initials")
    .withCategory("Text")
    .withReleased("direct")
    .withDescription(`Get initials for text.`)

    .withRequiredStringParam("text")
    .withStringParam("separator")
    .withBooleanParam("ignoreLowercase")
    .withStringResult()

    .withTest({ text: `Hello World`, separator: "." }, "H.W.")

    .withTest({ text: `Hello World` }, "HW")
    .withTest({ text: `Hello` }, "H")
    .withTest({ text: `Hello`, separator: "." }, "H")

    .withTest({ text: `   Hello   World  ` }, "HW")

    .withTest({ text: `Hello the World`, separator: "." }, "H.t.W.")
    .withTest({ text: `Hello the World`, separator: ".", ignoreLowercase: true }, "H.W.")
    .withTest({ text: `Hello the World`, separator: ".", ignoreLowercase: false }, "H.t.W.")

    .run(({ text, separator = "", ignoreLowercase = false }) => {
        const initials = text
            .trim()
            .split(" ")
            .map(t => t.trim())
            .filter(t => t !== "")
            .map(x => x.slice(0, 1))
            .filter(i => !ignoreLowercase || i === i.toLocaleUpperCase());

        const ending = initials.length > 1 ? separator : "";
        return initials.join(separator) + ending;
    });
