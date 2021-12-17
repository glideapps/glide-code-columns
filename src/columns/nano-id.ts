import * as glide from "../glide";
import { nanoid, customAlphabet } from "../../node_modules/nanoid/async";
import { customRandom, urlAlphabet } from "nanoid";
import seedrandom from "seedrandom";

export default glide
    .columnNamed("Nano Id")
    .withCategory("Text")
    .withDescription(`A tiny (108 bytes), secure, URL-friendly, unique string ID generator for JavaScript`)
    .withRequiredStringParam("seed", "Seed")
    .withNumberParam("length", "Length")
    .withStringParam("alphabet", "Custom Alphabet")
    .withAuthor("Andrey Sitnik", "https://github.com/ai/nanoid")
    .withTest({ length: 10, seed: "abcdef", alphabet: "abc123" }, "a11a113c1b")
    .withAbout(
        `
        A tiny, secure, URL-friendly, unique string ID generator for JavaScript.`
    )
    .withStringResult()
    .run(async ({ alphabet, length, seed }) => {
        if (seed && alphabet && length) {
            const rng = seedrandom(seed);
            const nanoid = customRandom(alphabet, length, size => {
                return new Uint8Array(size).map(() => 256 * rng());
            });
            return nanoid();
        } else if (seed && alphabet) {
            const rng = seedrandom(seed);
            const nanoid = customRandom(alphabet, 10, size => {
                return new Uint8Array(size).map(() => 256 * rng());
            });
            return nanoid();
        } else if (seed && length) {
            const rng = seedrandom(seed);
            const nanoid = customRandom(urlAlphabet, length, size => {
                return new Uint8Array(size).map(() => 256 * rng());
            });
            return nanoid();
        } else if (seed) {
            const rng = seedrandom(seed);
            const nanoid = customRandom(urlAlphabet, 10, size => {
                return new Uint8Array(size).map(() => 256 * rng());
            });
            return nanoid();
        }
    });
