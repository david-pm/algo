// ********************************************
// initializations
var array = [],
    rando = 0,
    counter = 0;
// ********************************************
// helper functions
function pickANumber(limit) {
  rando = Math.floor(Math.random() * limit) + 1;
}
function populateArray(start, limit) {
  for (i = start; i <= limit; i++) {
    array.push(i);
  }
  pickANumber(limit);
}
// ********************************************
// algorithm
function binarySearch(array, target) {
  var n = array.length,        // inputs
      min = 0,                 // init to first index
      max = Math.floor(n - 1), // init last index in array
      idx = Math.floor(n / 2), // index of our guess
      guess = array[idx];      // our guess

    counter += 1;              // increment count for every recurssive call
    debugger;
    if (guess === target)
    	return {guess: guess, counter: counter};

    (guess < target) ?
      array = array.slice(idx + 1) :
      array = array.slice(min, idx); // if (guess > target)

    return binarySearch(array, target);
}


populateArray(1, 100);
console.log( binarySearch(array, rando) );

// WRITTEN from scratch by davidpm
