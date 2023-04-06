const vision = require("@google-cloud/vision");
const { GoogleAuth, grpc } = require("google-gax");

export default async function vision(image) {
  const client = new vision.ImageAnnotatorClient();
  
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