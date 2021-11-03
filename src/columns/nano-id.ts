import * as glide from "../glide";
import { nanoid } from "../../node_modules/nanoid/async";

const run: glide.Column = async () => {
    const id = await nanoid();
    return id;
};

export default glide
    .columnNamed("Nano Id")
    .withCategory("Text")
    .withDescription(`A tiny (108 bytes), secure, URL-friendly, unique string ID generator for JavaScript`)
    .withAuthor("Andrey Sitnik", "https://github.com/ai/nanoid")
    .withAbout(
        `
        A tiny, secure, URL-friendly, unique string ID generator for JavaScript.`
    )
    .withStringResult()
    .run(run);
