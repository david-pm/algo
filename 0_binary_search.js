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






// var doSearch = function(array, targetValue) {
// 	 var min = 0;
// 	 var max = array.length - 1;
//   var guess;
//   while(array[max] >= array[min]){
//       guess = Math.floor( (max + min) / 2);
//       if(array[guess] === targetValue) { return guess; }
//       else if(array[guess] < targetValue) { min = guess + 1; }
//       else { max = guess - 1; }
//   }
// 	return -1;
// };
// var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
// 		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
// var result = doSearch(primes, 73);
// console.log("Found prime at index " + result);

// Another way to do it found online
