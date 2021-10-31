import * as glide from "../glide";

require("@tensorflow/tfjs");
import * as toxicity from "@tensorflow-models/toxicity";

export default glide
    .columnNamed("Is Toxic")
    .withCategory("Text")
    .withReleased("direct")
    .withDescription(`Indicates whether text is a URL.`)

    .withStringParam("text")
    .withStringResult()

    .withTest({ text: `you suck` }, "identity_attack")

    .run(async ({ text }) => {
        const model = await toxicity.load(0.9, []);
        const results = await model.classify(text);
        console.log(results);
        return results[0].label;
    });
