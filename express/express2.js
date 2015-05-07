//
// Summit for Software Engineers.
//

// ********
// Slightly more sophisticated Express example, mulitple routes, JSON, query params.
// ********

var Express = require('express');
var app = Express();
app.get('/', function(req, res) {
  res.end('Hello World\n');
});
// GET http://127.0.0.1:1337/hello?q=world
app.get('/hello', function(req, res) {
  res.send({'Hello': req.query.q});
});
app.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');
