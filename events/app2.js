//
// Summit for Software Engineers.
//

// ********
// Event emitter example using setTimeout.
// ********

var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('foo', function (x) {
    console.log('Foo: ' + x);
    emitter.removeAllListeners('foo');
});

setTimeout(function () {
    emitter.emit('foo', 'from timeout');
}, 5000);

console.log('End of script ...');
