//
// Summit for Software Engineers.
//

var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('foo', function (x) {
    console.log('Foo: ' + x);
});

setTimeout(function () {
    emitter.emit('foo', 'from timeout');
    emitter.removeAllListeners('foo');
}, 5000);

console.log('Waiting ...');
