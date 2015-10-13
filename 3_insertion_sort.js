var items = [4,2,7,9,1,3,5,6,10,8];
// think of "shiftSort"
function insertionSort(items) {
  var len = items.length,         // number of items in the array
      value,                      // the value currently being compared
      i,                          // index into unsorted section
      j;                          // index into sorted section

  for (i = 0; i < len; i++) {
    // store the current value because it may shift later
    value = items[i];
    // Whenever the value in the sorted section is greater than the value
    // in the unsorted section, shift all items in the sorted section over
    // by one. This creates space in which to insert the value.
    // The inner loop moves from the back of the sorted section towards the front.
    // It is also responsible for shifting items as comparisons happen.
    for (j = i - 1; j > -1 && items[j] > value; j--) {
        items[j+1] = items[j];
    }
    items[j+1] = value;
  }
  return items;
}
console.log(insertionSort(items));


// Insertion Sort -- O(2n) complexity
// STEPS:
// If the item value goes after the last item in the sorted section, then do nothing.
// If the item value goes before the last item in the sorted section, remove the item ...
//       value from the array and shift the last sorted item into the now-vacant spot.
// Compare the item value to the previous value (second to last) in the sorted section.
// If the item value goes after the previous value and before the last value, then ...
//       place the item into the open spot between them, otherwise, continue this ...
//       process until the start of the array is reached.

// If you need to sort items in JavaScript, you are best off starting with the built-in
// Array.prototype.sort() method before trying other algorithms. V8 actually uses
// insertion sort for sorting items with 10 or fewer items using Array.prototype.sort().

// Nice visual: https://www.nczonline.net/images/wp-content/uploads/2012/09/insertionsort.png
