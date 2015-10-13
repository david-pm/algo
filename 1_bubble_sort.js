var items = [4,2,7,9,1,3,5,6,10,8];

function swap(items, firstIndex, secondIndex){
  console.log(items); // shows the number of operations it takes
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}
function bubbleSort(items){
  var len = items.length,
    i, j;

  for (i = 0; i < len; i++){
    for (j = 0; j < len - 1; j++){
      if (items[j] > items[j+1]){
        swap(items, j, j+1);
      }
    }
  }
  return items;
}
console.log(bubbleSort(items));

// Bubble Sort -- O(n2) complexity
// STEPS:
// Compare the first item to the second item.
// If the first item should be after the second item, swap them.
// Compare the second item to the third item.
// If the second item should be after the third item, swap them.
// Continue until the end of the data set is reached.

// There is rarely a time when the built-in Array.prototype.sort() method isn’t suitable, so always use that first.
