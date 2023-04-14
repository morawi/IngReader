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

    var parsedTest = await parser(text);

    if (!parsedTest) {
      res.status(500).send({ error: "Error parsing text" });
      return;
    }

    var seperateByComma = parsedTest.split(",").map((item) => item.trim());

    if (seperateByComma.length < 1) {
      res.status(500).send({ error: "Error finding stuff" });
      return;
    }

    const searchResult = await matcher(seperateByComma);

    return res.status(200).send({ error: false, data: searchResult });

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
  return response.data.choices[0].text;
}

  // For proper authorship of function, see matcher.js in utils folder
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

// For proper authorship of function, see vision.js in utils folder
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

