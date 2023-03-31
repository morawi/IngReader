const { Configuration, OpenAIApi } = require("openai");
var fs = require("fs");

function parseIngredients(text) {
  // convert the input text to lowercase
  text = text.toLowerCase();

  // find the start index of the ingredients list
  const startIndex = text.indexOf("ingredients:");
  if (startIndex === -1) {
    return []; // return empty array if "ingredients:" not found
  }

  // calculate the end index of the ingredients list based on the first dot
  const endIndex = text.indexOf(".", startIndex);
  if (endIndex === -1) {
    return []; // return empty array if no dot found after start index
  }

  // extract the ingredients substring and remove unnecessary characters
  ingredientsString = text.substring(startIndex + "ingredients:".length, endIndex);
  cleanedIngredientsString = ingredientsString.replace(/\n/g, "").replace(/\r/g, "").trim();
  // remove any hyphens from ingredient names
  cleanedIngredientsString = cleanedIngredientsString.replace(/([a-z])-([a-z])/g, "$1$2");

  // split the cleaned ingredients string into an array of ingredients
  let ingredients = cleanedIngredientsString.split(/,|(|)|[|]/);
  ingredients = ingredients.map(ingredient => ingredient.trim()).filter(ingredient => ingredient !== "" && isNaN(ingredient));

  // capitalize the first letter of each word in the ingredients array
  const capitalizedIngredients = ingredients.map(ingredient => {
      const words = ingredient.trim().split(" ");
      const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
      return capitalizedWords.join(" ");
    });

  return capitalizedIngredients;
}

export default async function parser(text) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const prompt = fs.readFileSync("./prompt.txt", "utf8");

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt + text + `\n\nIngredients: `,
    temperature: 0.7,
    max_tokens: 512,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const ingredients = parseIngredients(response.data.choices[0].text);

  return ingredients;
}
