import * as glide from "../glide";
import { Cache } from "../cache";

import axios from "axios";

const cache = new Cache({ timeoutSeconds: 5 * 60 });

const interpretations = {
  sentiment: x => x.type,
  score: x => x.score,
  full: JSON.stringify,
};

const defaultInterpretation: keyof typeof interpretations = "sentiment";

export default glide
  .columnNamed("Text Sentiment")
  .withAuthor("twinword inc.", "help@twinword.com")
  .withCategory("Data & APIs")
  .withDescription("Is this comment positive or negative? Find out the tone.")
  .withAbout(
    `
    Subscribe and get an API key at [rapidapi.com/twinword/api/sentiment-analysis](https://rapidapi.com/twinword/api/sentiment-analysis/).
  `
  )

  .withRequiredStringParam("text")
  .withRequiredStringParam("apiKey", `API Key`)
  .withStringParam(
    "interpretation",
    `Result (${Object.keys(interpretations).join(", ")})`
  )
  .withPrimitiveResult()

  .run(async ({ text, apiKey, interpretation = defaultInterpretation }) => {
    const interpret =
      interpretations[interpretation] ?? interpretations[defaultInterpretation];

    async function getSentiment() {
      try {
        const response = await axios.get(
          "https://twinword-sentiment-analysis.p.rapidapi.com/analyze/",
          {
            params: { text },
            headers: {
              "x-rapidapi-host": "twinword-sentiment-analysis.p.rapidapi.com",
              "x-rapidapi-key": apiKey,
            },
          }
        );
        return response.data;
      } catch {
        return undefined;
      }
    }

    const data = await cache.getWith(text, getSentiment);
    return interpret(data);
  });
