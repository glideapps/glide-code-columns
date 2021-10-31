import * as glide from "../glide";

require("@tensorflow/tfjs");
import * as toxicity from "@tensorflow-models/toxicity";

export default glide
    .columnNamed("Is Toxic")
    .withCategory("Machine Learning")
    .withReleased("direct")
    .withDescription(
        `Detects threatening language, insults, obscenities, identity-based hate, or sexually explicit language.`
    )

    .withRequiredStringParam("text")
    .withStringArrayResult()

    .withTest({ text: `you suck` }, ["insult", "toxicity"])

    .run(async ({ text }) => {
        const model = await toxicity.load(0.9, []);
        const results = await model.classify(text);
        return results.filter(r => r.results.some(rr => rr.match)).map(r => r.label);
    });
