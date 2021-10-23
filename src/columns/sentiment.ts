import * as glide from "../glide";
import axios from "axios";

export default glide
  .columnNamed("Text Sentiment")
  .withAuthor("twinword inc.", "help@twinword.com")
  .withCategory("Text")
  .withDescription("Is this comment positive or negative? Find out the tone.")
  .withAbout(
    `
    Subscribe and get an API key at [rapidapi.com/twinword/api/sentiment-analysis](https://rapidapi.com/twinword/api/sentiment-analysis/).
  `
  )

  .withRequiredStringParam("text")
  .withRequiredStringParam("apiKey", `API Key`)
  .withStringResult()

  .run(async ({ text, apiKey }) => {
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
      return JSON.stringify(response.data);
    } catch {
      return undefined;
    }
  });
