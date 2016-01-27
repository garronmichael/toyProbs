/*

Write a method, isCircleSorted(int[] A) (Java, JavaScript), or Array#circularly_sorted? (Ruby) that determines if 
A is circularly sorted. An Array is circularly sorted if the elements are sorted in ascending order, but displaced, 
or rotated, by any number of steps.

For Example:

True:
isCircleSorted([2,3,4,5,0,1]);
isCircleSorted([4,5,6,9,1]);
isCircleSorted([10,11,6,7,9]);
isCircleSorted([1,2,3,4,5]);
isCircleSorted([5,7,43,987,-9,0]);


False:
isCircleSorted([4,1,2,5]);
isCircleSorted([8,7,6,5,4,3]);
isCircleSorted([6,7,4,8]);
isCircleSorted([7,6,5,4,3,2,1]);

*/

function isCircleSorted( arr ){
  var prev = arr[0];
  var saved;
  // iterate over the array
  for(var i = 1; i < arr.length; i++) {
    // if cur > prev, set prev to cur and continue
    if(arr[i] > prev) {
    prev = arr[i];
    continue;
    }
    // if the next value is lower than previous value
    if(arr[i] < prev) {
      // save the previous value
      saved = prev;
      arr = arr.splice(i);
      break;
    }
  }
  prev = arr[0];
  for(var j = 1; j < arr.length; j++) {
    // if cur > prev, set prev to cur and continue
    if(arr[j] > prev && arr[j] < saved) {
    prev = arr[j];
    continue;
    } else {
      return false;
    }
  }
  
  // return true only if all checks pass
    return true;

};


// console.log(isCircleSorted([7,6,5,4,3,2,1])); // false
// console.log(isCircleSorted([8,7,6,5,4,3])); // false


console.log(isCircleSorted([2, 3, 4, 5, 6])); //true
// console.log(isCircleSorted([5,7,43,987,-9,0])); // true
// console.log(isCircleSorted([10,11,6,7,9]));  // true

// clever solutions

// what is this???

function isCircleSorted(arr) {
  return arr.filter(function(v,i) { return v > arr[(i+1)%arr.length]; }).length < 2;
}


