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

function smaller(arr = []) {
      // add the count to the output array 
  // for each value in the array
  return arr.map( (v, i, a) => {
    let count = 0;
    let curVal = v;
    
    // for each of the following values
    for(let j = i; j < a.length; j++) {
      let nextVal = a[j];
      // if the current value is greater than the next value
      if(curVal > nextVal) {
        // increment count
        count++;
      }
    }
    // set the value to count
    return count;
  });
}

console.log(smaller([5,4,3,2,1]));

// WOW

const smaller = nums => nums.map((x, i) => nums.slice(i).filter(y => x > y).length);
