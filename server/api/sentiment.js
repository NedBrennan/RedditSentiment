var https = require('follow-redirects').https;
var fs = require('fs');
const superagent = require('superagent')

const analyzeSentiment = async (textString) => {
  try {
    const options = {
      'method': 'POST',
      'headers': {
      },
      'maxRedirects': 20
    };

    const response = await superagent.get(`api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=${textString}`).query(options)
    return JSON.parse(response.text)
  } catch (error) {
    
  }
}

module.exports = { analyzeSentiment }