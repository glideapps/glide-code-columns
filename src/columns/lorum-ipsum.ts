import * as glide from "../glide";
import { LoremIpsum } from "lorem-ipsum";

export default glide
  .columnNamed("Lorum Ipsum")
  .withCategory("Text")
  .withDescription(`Produces and 'lorum ipsum' style string`)
  .withStringResult()
  .withRequiredNumberParam("number", "Number of words")
  .run(({ number }) => {
    const lorum = new LoremIpsum();
    const text = lorum.generateWords(number);
    return text;
  });
