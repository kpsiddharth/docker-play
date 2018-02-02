const express = require('express')

const app = express()

// Set the application port from PORT environment variable, or 
// fall back to the 3000 default port.
port = process.env.PORT || 3000

app.get('/sayHello/:name', function (req, res) { 
    name = req.params.name;
    retVal = 'John Doe';
    // If a name has been passed to this method, then return back
    // a Camel-cased version of the string. Otherwise, return a 
    // ''John Doe' to identify unknown users.
    if (name) retVal = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    res.send(retVal); 
  } 
)

app.listen(port, () => console.log('Example app listening on port ' + port + '!'))
