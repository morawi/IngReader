const vision = require("@google-cloud/vision");
const { GoogleAuth, grpc } = require("google-gax");

async function scan(image) {
  const client = new vision.ImageAnnotatorClient(
    {keyFilename: "./static/chrome-sublime-382917-b88a156704b9.json"}
  );
  
  const [result] = await client.textDetection(image);

  if (!result.fullTextAnnotation) {
    return false;
  }

  return result.fullTextAnnotation.text;
};