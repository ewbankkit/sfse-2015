//
// Summit for Software Engineers.
//

// ********
// Demonstrate ticks.
// ********

console.log('Start of script ...');

process.nextTick(function() {
  console.log('Hello, world!');
});

console.log('End of script ...');
