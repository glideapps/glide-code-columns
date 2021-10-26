import * as glide from "../glide";

import { LoremIpsum } from "lorem-ipsum";
import seedrandom from "seedrandom";

export default glide
    .columnNamed("Lorem Ipsum")
    .withCategory("Text")
    .withDescription(`Produces a 'lorem ipsum' style string`)
    .withAuthor("davidbau", "github.com/davidbau/seedrandom")
    .withAuthor("knicklabs", "github.com/knicklabs/lorem-ipsum.js")
    .withStringResult()
    .withRequiredNumberParam("numberOfWordsPerSentence", "Number of words per sentence")
    .withRequiredNumberParam("numberOfSentences", "Number of sentences")
    .withTest({ numberOfWordsPerSentence: 2, numberOfSentences: 3 }, "Aliqua duis. Incididunt culpa. Commodo enim.")
    .run(({ numberOfWordsPerSentence, numberOfSentences }) => {
        const lorem = new LoremIpsum({
            wordsPerSentence: {
                min: numberOfWordsPerSentence,
                max: numberOfWordsPerSentence,
            },
            random: seedrandom("Glide")
        });
        const text = lorem.generateSentences(numberOfSentences);
        return text;
    });
