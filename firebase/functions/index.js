const functions = require("firebase-functions");
const admin = require("firebase-admin");
const Firestore = require("@google-cloud/firestore");
const fs = require("fs");
const { Configuration, OpenAIApi } = require("openai");
const vision = require("@google-cloud/vision");
const { GoogleAuth, grpc } = require("google-gax");
const Fuse = require("fuse.js");

admin.initializeApp();

let rawdata = fs.readFileSync("./static/ingredients.json", "utf8");

let data = JSON.parse(rawdata);
let processedData = Object.keys(data).map((key) => data[key]);

exports.procesImage = functions
  .region("europe-west1")
  .https.onRequest(async (req, res) => {
    // if image not in request return error
    if (!req.body.image) {
      res.status(400).send({ error: "No image in request body" });
      return;
    }

    var text = await scan(req.body.image);

    if (text == null || !text) {
      res.status(500).send({ error: "Error scanning image" });
      return;
    }

    console.log(text)

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

    
    var db = admin.firestore();

    const searchResult = matcher(seperateByComma);

    return res.status(200).send({ error: false, data: searchResult });

  });

  async function parser(text) {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
  
    const prompt = fs.readFileSync("./static/prompt.txt", "utf8");
  
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

  async function matcher(inputs) {
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

  async function scan(image) {
    const client = new vision.ImageAnnotatorClient(
      {keyFilename: "./chrome-sublime-382917-b88a156704b9.json"}
    );
    
    const request = {
    image: {
      content: Buffer.from(image, 'base64')
    }
    };

    const [result] = await client.textDetection(request);

    if (!result.fullTextAnnotation) {
        return false;
    }

    return result.fullTextAnnotation.text;
  };

