import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv';
import fs from 'fs';
// This code exports an asynchronous function called "parser" that reads a prompt from a file, 
// calls the OpenAI API with a given text input and returns the response.
export default async function parser(text) {
  dotenv.config();

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const prompt = fs.readFileSync("./static/prompt.txt", "utf8");
  
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt + text + `\n\nIngredients 3: `,
    temperature: 0.7,
    max_tokens: 512,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return response.data.choices[0].text;
}