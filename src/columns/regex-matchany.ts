import * as glide from "../glide";

export default glide
    .columnNamed("Check Text Matches")
    .withCategory("Text")
    .withDescription("Check that text matches a regular expression.")

    .withStringParam("text")
    .withStringParam("regex", "Regular Expression")
    .withBooleanResult()

    .withTest({ text: `Hello, world.`, regex: "Hello, (.+)." }, true)
    .withTest({ text: `Goodnight, moon.`, regex: "Hello, (.+)." }, false)

    .run(({ text, regex }) => {
        if (regex === undefined) {
            return true;
        }
        if (text === undefined) {
            return false;
        }
        return text.match(regex) !== null;
    });
