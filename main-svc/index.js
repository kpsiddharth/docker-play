const express = require('express')
const request = require('request')

const app = express()

// Set the application port from PORT environment variable, or 
// fall back to the 3000 default port.
port = process.env.PORT || 3000;
nameserviceport = process.env.NAMESERVICEPORT || 3000

app.get('/:name', function (req, res) { 
    name = req.params.name;

    request({
      uri: 'http://nameservice:' + nameserviceport + '/sayHello/' + name
      },
      function(error, response, body) {
        if (!error && response.statusCode === 200) {
          console.log('Name Service Response = ' + body);
          res.send('Howdy, ' + body + '!');
        } else {
          res.send('Howdy, Mr India!');
        }
      }
    );
});

app.listen(port, () => console.log('Main Service listening on port ' + port + '!'))
