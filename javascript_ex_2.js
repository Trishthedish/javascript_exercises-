// Exercise #2: Find the biggest number in the array
// Utilize the stub code below to complete the problem:
// getBiggest should accept an array as a parameter and return a the largest number in the array

// Planning:
// pass an array to getBiggest;
// get a return value that is the biggest number in the array
//

// First Solution:
var arrayOfNums = [2, 7, 7, 3, 9, 0, 1, 6, 8, 3, 8, 4, 7, 9];

function getBiggest(array) {
  var sorted_array = array.sort();
  sorted_array.reverse();
  return sorted_array[0];

}
// created method & now calling it and storing it new variable called biggest...
console.log("---- Solution # 1. ----");

biggest = getBiggest(arrayOfNums);
console.log("The biggest is: " + biggest);
// => The biggest is: 9


console.log("---- Solution # 2. ----");
// Second Solution:

var arrayOfNums = [2, 7, 7, 3, 9, 0, 1, 6, 8, 3, 8, 4, 7, 9];

function getBiggest(array) {
  if (array.length === 0) {
    return;
  }
  // set current max as whatever is @ index zero of array. Worse case: it will actaully be the last num checked.
  var max = array[0];
  for(var i = max; i < array.length; i++) {
    var current = array[i];
    if (current > max){
      max = current;
    }
  }
  return max;
}

getBiggest(arrayOfNums);

console.log("getBiggest(arrayofNums) returns: " + getBiggest(arrayOfNums));
// => getBiggest(arrayofNums) returns: 9
