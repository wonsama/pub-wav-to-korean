var fs = require("fs");
const axios = require("axios").default;

require("dotenv").config();

var openApiURL = process.env.ETRI_API_URL;
var accessKey = process.env.ETRI_API_KEY;
var languageCode = process.env.ETRI_API_LANGUAGE;
var audioFilePath = "output/240731_scrum_5.wav";
var audioData = fs.readFileSync(audioFilePath);

var requestJson = {
  argument: {
    language_code: languageCode,
    audio: audioData.toString("base64"),
  },
};

console.log(new Date());

axios({
  method: "post",
  url: openApiURL,
  data: JSON.stringify(requestJson),
  headers: { "Content-Type": "application/json", Authorization: accessKey },
})
  .then((res) => {
    console.dir(res.data);
    console.log(new Date());
  })
  .catch((err) => {
    console.error(err);
  });

// var request = require("request");
// var options = {
//   url: openApiURL,
//   body: JSON.stringify(requestJson),
//   headers: { "Content-Type": "application/json", Authorization: accessKey },
// };
// request.post(options, function (error, response, body) {
//   console.log("responseCode = " + response.statusCode);
//   console.log("responseBody = " + body);
// });
