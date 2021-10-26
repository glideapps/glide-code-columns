import * as glide from "../glide";

import { LoremIpsum } from "lorem-ipsum";

export default glide
    .columnNamed("Lorem Ipsum")
    .withCategory("Text")
    .withDescription(`Produces a 'lorem ipsum' style string`)
    .withAuthor("knicklabs", "github.com/knicklabs/lorem-ipsum.js")
    .withRequiredNumberParam("numberOfSentences", "Number of Sentences")
    .withStringResult()
    .run(({ numberOfSentences }) => {
        const lorem = new LoremIpsum({
            wordsPerSentence: {
                min: 2,
                max: 10,
            },
        });
        const text = lorem.generateSentences(numberOfSentences);
        return text;
    });
