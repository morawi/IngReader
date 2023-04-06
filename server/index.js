

export default async function processImage(imageURL){
    var text = await vision(imageURL);
    if ( text == null ){
        return error;
    }

    var parsedTest = await parser(text);

    if (!parsedText){
        return error;
    }

    var seperateByComma = parsedTest.split(",").map((item) => item.trim());

    if (seperateByComma.length < 1) {
      return error;
    }

    var jsonArray = await matcher(parsedText);

    return jsonArray;
}