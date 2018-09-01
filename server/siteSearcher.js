var axios = require('axios');

checkSiteTitle = function(url) {
  console.log('searching for: ' + url);
  return axios.get(url)
              .then((result) => {
                console.log(result.headers['x-frame-options']);
                let valuesToSave = {};
                valuesToSave.xframe = false;
                if (result.headers['x-frame-options'] && result.headers['x-frame-options'].toLowerCase() === 'sameorigin') {
                  valuesToSave.xframe = true;
                  let contentStart = result.data.indexOf('<body');
                  let contentEnd = result.data.indexOf('</body>') + 7;
                  var body = result.data.substring(contentStart, contentEnd);
                  valuesToSave.content = body;
                }
                let start = result.data.indexOf('<title') + 7;
                let end = result.data.indexOf('</title>');
                var title = result.data.substring(start, end);
                valuesToSave.title = title;
                return (valuesToSave);
              })
              .catch((err) => {
                console.log(err);
              }); 
};

module.exports.checkSiteTitle = checkSiteTitle;