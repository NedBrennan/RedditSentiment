var https = require('follow-redirects').https;
var fs = require('fs');

let key = process.env.API_KEY

var options = {
  'method': 'POST',
  'hostname': 'api.meaningcloud.com',
  'path': `/sentiment-2.1?key=3f5fd990377dad84d44391fb9c8f7937&lang=en&txt=I%20love%20it&model=WSBTest`,
  'headers': {
  },
  'maxRedirects': 20
};

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