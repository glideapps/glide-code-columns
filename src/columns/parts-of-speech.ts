import * as glide from "../glide";

const winkNLP = require("wink-nlp");
const model = require("wink-eng-lite-web-model");
const nlp = winkNLP(model);

export default glide
    .columnNamed("Parts of Speech Extractor")
    .withCategory("Text")
    .withAuthor("WinkJS", "https://github.com/winkjs/wink-nlp")
    .withReleased("direct")
    .withDescription(`Parts of Speech extractor`)
    .withStringResult()
    .withRequiredStringParam("sentence")
    .withRequiredStringParam("pos", "https://winkjs.org/wink-nlp/part-of-speech.html")

    .withTest({ sentence: "Sally kicked the ball", pos: "VERB" }, "kicked")
    .withTest({ sentence: "Sally kicked the ball", pos: "PROPN" }, "Sally")
    .withTest({ sentence: "Sally kicked the ball", pos: "NOUN" }, "ball")

    .run(({ sentence, pos }) => {
        return nlp
            .readDoc(sentence)
            .tokens()
            .filter(token => token.out(nlp.its.pos) === pos)
            .out()
            .join(" ");
    });
