const Fuse = require("fuse.js");

const fs = require('fs');

let rawdata = fs.readFileSync('../static/ingredients.json');
let data = JSON.parse(rawdata);
console.log(data);

export default function matcher(inputs) {
    const options = {
      includeScore: true,
      threshold: 0.1,
      keys: ["name"],
    };
  
    const fuse = new Fuse(data, options);
  
    var results = [];
  
    inputs.forEach((input) => {
      var search = fuse.search(input);
      if (search.length > 0) {
        results.push(search[0].item);
      }
    });
  
    return results;
  }