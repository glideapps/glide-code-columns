import { Configuration, OpenAIApi } from "openai";
import * as glide from "../glide";

export default glide
    .columnNamed("GPT-3")
    .withCategory("Machine Learning")
    .withReleased("direct")
    .withDescription(`Run a GPT-3 prompt.`)
    .withStringResult()
    .withRequiredStringParam("key", "API Key (beta.openai.com/account/api-keys)")
    .withRequiredStringParam("prompt")

    .run(async ({ prompt, key }) => {
        const configuration = new Configuration({
            apiKey: key,
        });
        const openai = new OpenAIApi(configuration);

        const response = await openai.createCompletion({
            model: "text-davinci-002",
            prompt,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        return response.data.choices[0].text;
    });
