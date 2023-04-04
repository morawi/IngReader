import parser from "../utils/parser.js";

parser("Ingredients: Enriched Corn Meal (Corn Meal Ferrous Sulfate, Niacin, Thiamin Mononitrate, Riboflavin, Folic Acid), Sunflower Oil, Cheddar Cheese (Milk, Cheese Cultures, Salt, Enzymes), Whey, Maltodextrin (Made from Corn), Sea Salt, Natural Flavors, Sour Cream (Cultured Cream, Skim Milk), Torula Yeast, Lactic Acid, and Citric Acid. CONTAINS MILK INGREDIENTS.").then(  (ingredients) => {    console.log(ingredients);  });
