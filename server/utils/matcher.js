import Fuse from "fuse.js";
import { readFileSync } from "fs";

let rawdata = readFileSync("../static/ingredients.json");
let data = JSON.parse(rawdata);
let processedData = Object.keys(data).map((key) => data[key]);

export default function matcher(inputs) {
  const options = {
    includeScore: true,
    threshold: 0.15,
    keys: [
      { name: "name", getFn: (item) => Object.values(item.name) },
      { name: "ciqual_food_name", getFn: (item) => item.ciqual_food_name ? Object.values(item.ciqual_food_name) : []},
    ],
  };

  const fuse = new Fuse(processedData, options);

  var results = [];

  inputs.forEach((input) => {
    var search = fuse.search(input);
    if (search.length > 0) {
      results.push(search[0].item);
    }
  });

  return results;
}
