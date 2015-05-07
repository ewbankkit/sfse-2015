//
// Summit for Software Engineers.
//

// ********
// Canonical Express 'Hello World'.
// ********

var Express = require('express');
var app = Express();
app.get('/', function(req, res) {
  res.end('Hello World\n');
});
// Other routes will return HTTP 404.
app.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');
