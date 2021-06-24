const NumFinder = require('../lib/numfinder');

console.log('Test 1');
let numfinder = new NumFinder();
numfinder.find([1, 10]);
console.log(numfinder.smallest, numfinder.largest);
if (numfinder.smallest === 1 && numfinder.largest === 10)
    console.log('pass');
else 
console.log('fail');

// ---------------------------------//
console.log('Test 2');
numfinder = new NumFinder();
numfinder.find([50, 1, 10, 5]);
console.log(numfinder.smallest, numfinder.largest);
if (numfinder.smallest === 1 && numfinder.largest === 50)
    console.log('pass');
else 
console.log('fail');