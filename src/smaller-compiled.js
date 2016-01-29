/*

Write

function smaller(arr)
that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

For example:

smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
smaller([1, 2, 0]) === [1, 1, 0]
If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?
AlgorithmsArrays

*/

"use strict";

function smaller() {
  var arr = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  // add the count to the output array
  // for each value in the array
  return arr.map(function (v, i, a) {
    var count = 0;
    var curVal = v;

    // for each of the following values
    for (var j = i; j < a.length; j++) {
      var nextVal = a[j];
      // if the current value is greater than the next value
      if (curVal > nextVal) {
        // increment count
        count++;
      }
    }
    // set the value to count
    return count;
  });
}

console.log(smaller([5, 4, 3, 2, 1]));
