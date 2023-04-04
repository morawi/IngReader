export default async function parser(text) {
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
    let ingredientsString = text.substring(startIndex + "ingredients:".length, endIndex);
    let cleanedIngredientsString = ingredientsString.replace(/\n/g, "").replace(/\r/g, "").trim();
    // remove any hyphens from ingredient names
    cleanedIngredientsString = cleanedIngredientsString.replace(/([a-z])-([a-z])/g, "$1$2");
  
    // split the cleaned ingredients string into an array of ingredients
    let ingredients = cleanedIngredientsString.split(/,|\(|\)|\[|\]/);
    ingredients = ingredients.map(ingredient => ingredient.trim()).filter(ingredient => ingredient !== "" && isNaN(ingredient));
  
    // capitalize the first letter of each word in the ingredients array
    const capitalizedIngredients = ingredients.map(ingredient => {
        const words = ingredient.trim().split(" ");
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        return capitalizedWords.join(" ");
      });
  
    return capitalizedIngredients;
}
