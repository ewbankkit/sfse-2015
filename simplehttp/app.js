//
// Summit for Software Engineers.
//

// ********
// Simple HTTP example.
// ********

// curl localhost:1337
// curl localhost:1337 -d 'Yay'

var http = require('http');
var port = 1337;
var server = http.createServer(function (req, res) {
    // req is an http.IncomingMessage, a Readable Stream.
    // res is an http.ServerResponse, a Writable Stream.
    var reqBody = '';

    req.setEncoding('utf8'); // Any request is a UTF-8 encoded string.
    req.on('data', function (chunk) {
        reqBody += chunk;
    });
    req.on('end', function () {
        console.log(req.method + ' ' + req.url);
        console.log('** BODY: ' + reqBody.length);
        if (reqBody) {
            console.log(reqBody);
        }

        res.writeHead(200); // OK
        res.write('Hello');
        res.end();
    });
});

console.log('Server running at http://127.0.0.1:1337/');
server.listen(port);
