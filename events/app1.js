//
// Summit for Software Engineers.
//

// ********
// Event emitter example.
// ********

var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('foo', function (x) {
    console.log('Foo: ' + x);
    emitter.removeAllListeners('foo');
});
emitter.emit('foo', 'from script');

console.log('End of script ...');
