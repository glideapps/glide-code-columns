import * as glide from "../glide";
import { nanoid } from "../../node_modules/nanoid/async";

export default glide
    .columnNamed("Nano Id")
    .withCategory("Text")
    .withDescription(`A tiny (108 bytes), secure, URL-friendly, unique string ID generator for JavaScript`)
    .withNumberParam("num", "Number")
    .withAuthor("Andrey Sitnik", "https://github.com/ai/nanoid")
    .withFailingTest(6, "test")
    .withAbout(
        `
        A tiny, secure, URL-friendly, unique string ID generator for JavaScript.`
    )
    .withStringResult()
    .run(async ({ num }) => {
        const id = await nanoid(num);
        return id;
    });
