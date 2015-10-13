var items = [4,2,7,9,1,3,5,6,10,8];

function swap(items, firstIndex, secondIndex){
  console.log(items);
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}
function selectionSort(items){
  var len = items.length,
      checkPoint;
  for (i = 0; i < len; i++){
    //set min to this position--updated by second loop and holds onto min value
    //until second loop finishes
    checkPoint = i;
    //check the rest of the array to see if anything is smaller
    for (j = i + 1; j < len; j++){
      if (items[j] < items[checkPoint]){
          checkPoint = j; // update checkpoint with smaller value
      }
    }
    //if the checkPoint isn't in the position, swap it
    if (i != checkPoint){
      swap(items, i, checkPoint);
    }
  }

  return items;
}
console.log(selectionSort(items));

// Selection Sort -- O(n2) complexity
// STEPS:
// Assume the first item is the minimum value.
// Compare this item to the second item.
// If the second item is smaller than the first, set the second item as the new minimum.
// Continue until the end of the data set is reached.
// If the minimum value is not the item you started with, swap them.

// There is rarely a time when the built-in Array.prototype.sort() method isn’t suitable, so always use that first.
