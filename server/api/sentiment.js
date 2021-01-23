var https = require('follow-redirects').https;
var fs = require('fs');

let key = process.env.API_KEY

const analyzeSentiment = (textString) => {
var req = https.request(textString, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});
req.end();
}

module.exports = { analyzeSentiment }