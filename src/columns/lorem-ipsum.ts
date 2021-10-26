import * as glide from "../glide";

import { LoremIpsum } from "lorem-ipsum";

export default glide
    .columnNamed("Lorem Ipsum")
    .withCategory("Text")
    .withDescription(`Produces a 'lorem ipsum' style string`)
    .withAuthor("davidbau", "github.com/davidbau/seedrandom")
    .withAuthor("knicklabs", "github.com/knicklabs/lorem-ipsum.js")
    .withRequiredNumberParam("numberOfSentances", "Number of Sentences")
    .withStringResult()
    .run(({ numberOfSentances }) => {
        const lorem = new LoremIpsum({
            wordsPerSentence: {
                min: 2,
                max: 10,
            },
        });
        const text = lorem.generateSentences(numberOfSentances);
        return text;
    });
