import * as glide from "../glide";
import { nanoid, customAlphabet } from "../../node_modules/nanoid/async";

export default glide
    .columnNamed("Nano Id")
    .withCategory("Text")
    .withDescription(`A tiny (108 bytes), secure, URL-friendly, unique string ID generator for JavaScript`)
    .withNumberParam("num", "Length")
    .withStringParam("alphabet", "Custom Alphabet")
    .withAuthor("Andrey Sitnik", "https://github.com/ai/nanoid")
    .withFailingTest({ num: 10 }, "test")
    .withAbout(
        `
        A tiny, secure, URL-friendly, unique string ID generator for JavaScript.`
    )
    .withStringResult()
    .run(async ({ alphabet, num }) => {
        // if (alphabet) {
        //     const nanoid = customAlphabet(alphabet, num);
        //     return await nanoid();
        // } else {
        //     return await nanoid(num);
        // }        
        return await nanoid(num);
    });
