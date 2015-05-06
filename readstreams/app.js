//
// Summit for Software Engineers.
//

// ********
// Readable stream example.
// ********

var path = require('path');
var file = path.join(__dirname, 'Latin-Lipsum.txt');
var fs = require('fs');
var readStream = fs.createReadStream(file);
readStream.on('open', function (fd) {
    console.log('Stream is open: ' + fd);

    // Currently the stream is paused.
    // Add a data event handler to transition to flowing.
    readStream.on('data', function (chunk) {
        // chunk is a Buffer.
        console.log('** CHUNK: ' + chunk.length);
        console.log(chunk.toString());
    });

    readStream.on('end', function () {
        console.log('** END');
    });
});
readStream.on('close', function () {
    console.log('Stream is closed');
});
readStream.on('error', function (err) {
    console.log('Error: ' + err.message);
});

console.log('End of script ...');
