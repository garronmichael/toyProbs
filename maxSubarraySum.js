/*

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

*/

var maxSequence = function(arr){
  var maxSum = 0;
  var maxSubarray;
  var subarray = []; 
  if(arr.length) {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
        for(var j = i; j < arr.length; j++) {
          subarray.push(arr[j]);
          if(arr[j] > 0) {
            var curSum = subarray.reduce(function(p, c) { return p + c });
            if(curSum > maxSum) {
              maxSubarray = subarray.slice();
              maxSum = curSum;
            }
          }
        }
      }
      subarray = [];
    }
  } 
  return maxSum > 0 ? maxSum : 0;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6

// Solution

var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}