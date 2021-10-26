import * as glide from "../glide";
import { LoremIpsum } from "lorem-ipsum";

export default glide
  .columnNamed("Lorum")
  .withCategory("Text")
  .withDescription(`Produces and 'lorum ipsum' style string`)
  .withStringResult()
  .withRequiredNumberParam(
    "numberOfWordsPerSentence",
    "Number of words per sentence"
  )
  .withRequiredNumberParam("numberOfSentences", "Number of sentences")
  .run(({ numberOfWordsPerSentence, numberOfSentences }) => {
    const lorum = new LoremIpsum({
      wordsPerSentence: {
        min: numberOfWordsPerSentence,
        max: numberOfWordsPerSentence,
      },
    });
    const text = lorum.generateSentences(numberOfSentences);
    return text;
  });
