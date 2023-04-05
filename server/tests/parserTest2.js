import parser from "../utils/parser.js";

parser("Cholesterol . Less than 300mg 300mg Sodium Less than 2,400mg 2,400mg Total Carbohydrate 300g 375g Dietary Fiber 25g 30g INGREDIENTS: WATER, CHICKEN (.), LIVER, SOY FLOUR, POULTRY BY-PRODUCT MEAL, CRACKED BARLEY, GROUND CORN, IODIZED SALT, CALCIUM CARBONATE, VEG-ETABLE OIL, CHOINE CHLORIDE, MINERALS, VITAMINS. GUARANTEED ANALYSIS: CRUDE PROTEIN MIN. 8.0%, CRUDE FAT MIN. 5.0%, FIBER MAX. 1.5%, MOISTURE MAX. 25% ASH MAX 3.0%").then(  (ingredients) => {    console.log(ingredients);  });
