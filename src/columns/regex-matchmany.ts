import * as glide from "../glide";

export default glide
    .columnNamed("Extract Multiple Matching Text")
    .withCategory("Text")
    .withDescription("Extract text matching a regular expression, returning an array of matches.")
    .withReleased("direct")

    .withStringParam("text")
    .withStringParam("regex", "Regular Expression")
    .withStringArrayResult()
    .withTest({ text: `Hello, world.`, regex: "Hello, (.+)." }, ["world"])
    .withTest({ text: `Goodnight, moon`, regex: "Hello, (.+)." }, [])
    .withTest({ text: "Match 12 to 254", regex: `Match ([0-9]+) to ([0-9]+)` }, ["12", "254"])
    .run(({ text, regex }) => {
        if (regex === undefined) {
            return [];
        }
        const result = text?.match(regex)?.slice(1) ?? [];
        return result;
    });
