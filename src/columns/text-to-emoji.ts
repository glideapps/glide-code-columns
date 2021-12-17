import * as glide from "../glide";

const emojiFromText = require("emoji-from-text");

export default glide
    .columnNamed("Text to Emoji")
    .withCategory("Text")
    .withAuthor("IonicaBizau", "https://github.com/IonicaBizau/emoji-from-text#readme")
    .withReleased("direct")
    .withDescription(`Get an emoji from a piece of text`)
    .withStringResult()
    .withRequiredStringParam("text")

    .withTest({ text: "space" }, "🌌")
    .withTest({ text: "Hello World!" }, "🌐")

    .run(({ text }) => emojiFromText(text, true).match.emoji.char);
