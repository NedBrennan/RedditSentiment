const { analyzeSentiment } = require('./sentiment')


var options = {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': `/sentiment-2.1?key=3f5fd990377dad84d44391fb9c8f7937&lang=en&txt=I%20love%20it&model=WSBTest`,
    'headers': {
    },
    'maxRedirects': 20
  };

analyzeSentiment(options)