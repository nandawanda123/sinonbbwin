// 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
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-8Lmqoq19QSD4n9TXXZVqaFdv",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
console.log(response.data);