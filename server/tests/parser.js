import parser from "../utils/parser.js";

var seconds = new Date().getTime() / 1000;

console.log(await parser("Ingredients: 1/2 cup of sugar, 1/2 cup of flour"), ["1/2 Cup Of Sugar", "1/2 Cup Of Flour"]);
console.log(await parser("Ingredients: 1/2 cup of sugar"), ["1/2 Cup Of Sugar"]);
console.log(await parser("Ingredients: 1/2 cup of sugar, 1/2 cup of flour, 1/2 cup of milk"), ["1/2 Cup Of Sugar", "1/2 Cup Of Flour", "1/2 Cup Of Milk"]);
console.log(await parser("Ingredients: sugar, salt, vitamin E, Artificial Flavours"), ["sugar", "salt", "vitamin E", "Artificial Flavours"]);
console.log(await parser("Ingredients: Sugar, Glucose Syrup, Starch, Gelatin, Citric Acid, Permitted Food Colors"), ["Sugar", "Glucose Syrup", "Gelatin", "Citric Acid", "Permitted Food Colors"]);

// complex texts with noise

console.log(await parser(`Nutrition Facts
Serving Size 1 bar (45g)
Servings Per Container 6
Amount Per Serving
Calories 190
Total Fat 8g
Saturated Fat 2.5g
Trans Fat 0g
Cholesterol 0mg
Sodium 150mg
Total Carbohydrate 25g
Dietary Fiber 3g
Sugars 12g
Protein 6g
Vitamin A 50%
Vitamin C 100%
Calcium 4%
Iron 4%
INGREDIENTS: ORGANIC WHOLE GRAIN OATS, ORGANIC BROWN RICE SYRUP, ORGANIC PEANUT BUTTER, ORGANIC CANE SUGAR, ORGANIC SOY PROTEIN ISOLATE, ORGANIC TAPIOCA SYRUP, ORGANIC PEANUTS, ORGANIC PEA PROTEIN, ORGANIC DATE PASTE, ORGANIC SUNFLOWER OIL, ORGANIC ALMOND BUTTER, ORGANIC RICE STARCH, SEA SALT, ORGANIC NATURAL FLAVOR, ORGANIC ALMONDS, ORGANIC ROSEMARY EXTRACT.
CONTAINS PEANUTS, SOY, AND ALMONDS.
`))

var seconds2 = new Date().getTime() / 1000;

console.log("TIME TAKEN:", seconds2 - seconds);