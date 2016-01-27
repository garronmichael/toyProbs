/*

Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

*/

// my solution:

function iqTest(numbers){
  // convert string to an array
  var nums = numbers.split(' ');
  var even = [];
  var odd = [];
  // determine if which numbers are even and which are odd
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0) {
      even.push(nums[i]);
    } else {
      odd.push(nums[i]);
    }
  }
  // if the length of the sub array is one, return the index + 1 of that value
  // from the original array
  if(even.length === 1) {
    return nums.indexOf(even[0]) + 1;
  } else if(odd.length === 1) {
    return nums.indexOf(odd[0]) + 1;
  }  
}

// clever solution:

function iqTest(numbers){
  numbers=numbers.split(" ").map(function(x){return parseInt(x)%2;});
  if (numbers[0]+numbers[1]+numbers[2]==3 || numbers[0]+numbers[1]+numbers[2]==2) return numbers.indexOf(0)+1;
  else return numbers.indexOf(1)+1;
}