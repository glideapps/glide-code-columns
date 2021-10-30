import * as glide from "../glide";

export default glide
    .columnNamed("Word Count")
    .withCategory("Text")
    .withReleased("direct")
    .withDescription(`Count words in text.`)

    .withStringParam("words")
    .withNumberResult()

    .withTest({ words: `hello world` }, 2)
    .withTest({ words: `hello` }, 1)
    .withTest({ words: `` }, 0)

    .run(({ words = "" }) => words.match(/\S+/g)?.length ?? 0);
