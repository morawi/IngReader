const functions = require("firebase-functions");
const fs = require("fs");
const { Configuration, OpenAIApi } = require("openai");
const vision = require("@google-cloud/vision");
const { GoogleAuth, grpc } = require("google-gax");
const Fuse = require("fuse.js");
const os = require("os");

let rawdata = fs.readFileSync("./static/ingredients.json", "utf8");

let data = JSON.parse(rawdata);
let processedData = Object.keys(data).map((key) => data[key]);

exports.procesImage = functions
  .runWith({timeoutSeconds: 90})
  .region("europe-west1")
  .https.onRequest(async (req, res) => {
    // if image not in request return error
    console.log("Starting...")
    if (!req.body.image) {
      res.status(400).send({ error: "No image in request body" });
      return;
    }
    
    var text = await scan(req.body.image);
    

    if (text == null || !text) {
      res.status(500).send({ error: "Error scanning image" });
      return;
    }

    //console.log(text)

    var parsedTest = await parser(text);

    

    if (!parsedTest) {
      res.status(500).send({ error: "Error parsing text" });
      return;
    }
    //console.log("We have parsed text!\n");

    var seperateByComma = parsedTest.split(",").map((item) => item.trim());

    //console.log(seperateByComma);

    if (seperateByComma.length < 1) {
      res.status(500).send({ error: "Error finding stuff" });
      return;
    }

    //console.log("Entered matcher");

    const searchResult = await matcher(seperateByComma);

    //console.log(searchResult);
    //console.log(JSON.stringify(searchResult));

    const JSONRESULTS = JSON.stringify(searchResult);

    return res.status(200).send({ error: false, data: JSONRESULTS });

  });

  const parser = async(text) => {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
  
    const prompt = fs.readFileSync("./static/prompt.txt", "utf8");
    //console.log(prompt)
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt + text + `\n\nIngredients 3: `,
      temperature: 0.7,
      max_tokens: 512,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    //return "Filling, High Fructose Corn Syrup, Corn Syrup, Strawberry Puree ConCentrate, Glycerin, Sugar, Modified Corn Starch, Sodium Citrate, Citric Acid, Sodium Alginate, Natural And Artificial Strawberry Flavor, Dicalcium Phosphate, Modified CelLulose, Caramel Color, Malic Acid, Red #40, Enriched Flour, Wheat Flour, Niacinamide, Reduced Iron, Thiamin Mononitrate, Vitamin B1, Riboflavin, Vitamin B2, Folic Acid, Whole Grain Oats, Sugar, Sunflower Oil, High FrucTose Corn Syrup, Contains Two Percent Or Less Of Honey, Calcium Carbonate, Dextrose, Nonfat Dry Milk, Wheat Bran, Salt, Cellulose, Potassium Bicarbonate, Leavening, Natural And Artificial Flavor, Mono- And DiglycerIdes, Propylene Glycol Esters Of Fatty Acids, Soy Lecithin, Wheat Gluten, Cornstarch, Vitamin A Palmitate, Carrageenan, NiacinaMide, Sodium Stearoyl Lactylate, Guar Gum, Zinc Oxide, Reduced Iron, Pyridoxine HydroChloride Vitamin B6, Thiamin HydrochloRide Vitamin B₁, Riboflavin Vitamin B2, Folic Acid";
    return response.data.choices[0].text;
  }

  const matcher = async(inputs) => {
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

const scan = async (image) => {
  const path = require("path");
  const os = require('os');

  const inputImg = Buffer.from(image, "base64");
  const request = {
      "image": {"content": inputImg},
      "features": [{"type": "TEXT_DETECTION"}]
  };

  const imagePath = path.join(os.tmpdir(), "input-img.jpg"); // create path to the new file in the folder called input-img.jpg
  fs.writeFileSync(imagePath, inputImg);

  const client = new vision.ImageAnnotatorClient(
    {keyFilename: "./chrome-sublime-382917-b88a156704b9.json"}
  );

  const [result] = await client.annotateImage(request);
  if (!result.textAnnotations) {
    return false;
  }

  return result.textAnnotations[0].description;
}

