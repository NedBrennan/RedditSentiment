var https = require('follow-redirects').https;
var fs = require('fs');

let key = process.env.API_KEY

const analyzeSentiment = async(textString) => {

  var options = {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': `/sentiment-2.1?key=3f5fd990377dad84d44391fb9c8f7937&lang=en&txt=${textString}&model=WSBTest`,
    'headers': {
    },
    'maxRedirects': 20
  };

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    console.log('working')
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    console.log('hit me')
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