import * as glide from "../glide";
import { Cache } from "../cache";

const cache = new Cache({ timeoutSeconds: 24 * 60 * 60 });

const interpretations = {
    total: x => x.totalAmount.data,
    full: JSON.stringify,
};

const defaultInterpretation: keyof typeof interpretations = "total";

export default glide
    .columnNamed("Read Receipt")
    .withAuthor("taggun", "taggun.io")
    .withCategory("Machine Learning")
    .withDescription("Read information from picture of a receipt.")
    .withAbout(
        `
    Subscribe and get an API key at [rapidapi.com/Taggun/api/taggun](https://rapidapi.com/Taggun/api/taggun/).
  `
    )

    .withRequiredStringParam("url", "Receipt Image")
    .withRequiredStringParam("apiKey", `API Key`)
    .withStringParam("interpretation", `Result (${Object.keys(interpretations).join(", ")})`)
    .withPrimitiveResult()

    .run(async ({ url, apiKey, interpretation = defaultInterpretation }) => {
        const interpret = interpretations[interpretation] ?? interpretations[defaultInterpretation];

        async function readReceipt() {
            try {
                const result = await fetch("https://taggun.p.rapidapi.com/api/receipt/v1/simple/url", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        "x-rapidapi-host": "taggun.p.rapidapi.com",
                        "x-rapidapi-key": apiKey,
                    },
                    body: JSON.stringify({
                        url,
                        headers: {},
                        refresh: false,
                        incognito: false,
                        // ipAddress: "32.4.2.223",
                    }),
                });
                return await result.json();
            } catch {
                return undefined;
            }
        }

        const data = await cache.getWith(url, readReceipt);
        return interpret(data);
    });
