/* 
Define a function

var lastDigit = function(str1, str2){
  // your code here
}

that takes in two numbers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!

For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6.

The inputs to your function will always be non-negative integers.

Examples

lastDigit("4", "1")           //       4 => 4
lastDigit("4", "2")           //      16 => 6
lastDigit("9", "7")           // 4782969 => 9    
lastDigit("10","10000000000") //=> 0
Remarks

Since JavaScript doesn't have native arbitrary large integers, your arguments are going to be strings representing non-negative integers, e.g.

lastDigit("10", "10000000000");
The kata is still as hard as the variants for Haskell or Python, don't worry.

*/

var lastDigit = function(str1, str2){
  var n = parseInt(str1[str1.length - 1]);
  var lib = { 0: [0,0,0,0], 
              1: [1,1,1,1], 
              2: [6,2,4,8], 
              3: [1,3,9,7], 
              4: [6,4,6,4], 
              5: [5,5,5,5],
              6: [6,6,6,6], 
              7: [1,7,9,3], 
              8: [6,8,4,2], 
              9: [1,9,1,9] 
            };
  var x = parseInt(str2) % 4;
  return lib[n][x];
};

// console.log(lastDigit('13', '2950'));
// console.log(Math.pow(12, 2950));