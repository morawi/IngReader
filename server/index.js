//import required modules
import scan from "./utils/vision.js";
import parser from "./utils/parser.js";
import matcher from "./utils/matcher.js";

import dotenv from "dotenv";

import fs from "fs";

export default async function processImage(imageURL){
    //dotenv.config()

    var text = await scan(imageURL);

    if ( !text ){
        return 'error';
    }


    var parsedTest = await parser(text);


    if (parsedTest == null){
        return 'error';
    }

    var seperateByComma = parsedTest.split(",").map((item) => item.trim());

    if (seperateByComma.length < 1) {
      return 'error';
    }

    var jsonArray = await matcher(seperateByComma);

    return jsonArray;
}


processImage('./static/sample.jpeg').then((result) => {
        console.log(result);
    });
