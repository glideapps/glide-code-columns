import * as glide from "../glide";
import { LoremIpsum } from "lorem-ipsum";

export default glide
  .columnNamed("Lorem Ipsum")
  .withCategory("Text")
  .withDescription(`Produces a 'lorem ipsum' style string`)
  .withStringResult()
  .withRequiredNumberParam(
    "numberOfWordsPerSentence",
    "Number of words per sentence"
  )
  .withRequiredNumberParam("numberOfSentences", "Number of sentences")
  .run(({ numberOfWordsPerSentence, numberOfSentences }) => {
    const lorem = new LoremIpsum({
      wordsPerSentence: {
        min: numberOfWordsPerSentence,
        max: numberOfWordsPerSentence,
      },
    });
    const text = lorem.generateSentences(numberOfSentences);
    return text;
  });
