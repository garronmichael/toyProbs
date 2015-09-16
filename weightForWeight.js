/*

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:

a = "56 65 74 100 99 68 86 180 90"ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9) it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

*/

function orderWeight(strng) {
  if(strng === '') {
    return strng;
  }
  var output = [];
  var arr = strng.split(' ');
  arr.forEach( (v, i, a) => {
    var sum = v.split('').reduce( (a, b) => {
      return parseInt(a) + parseInt(b);
    });
    a[i] = [v, sum];
  });
  arr.sort(function (a, b) {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    if (a[0] < b[0]) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  arr.forEach( v => {
    output.push(v[0]);
  });

  return output.join(' ');
}

console.log(orderWeight("103 123 4444 99 2000")); //Should return "2000 103 123 4444 99"

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")); // Should return "11 11 2000 10003 22 123 1234000 44444444 9999"

// Solution 1

function orderWeight(strng) {
  return strng
    .split(" ")
    .map(function(v) {  
      return {
        val: v,
        key: v.split("").reduce(function(prev, curr) {
          return parseInt(prev) + parseInt(curr);
        }, 0)
      };
    })
    .sort(function(a, b) {
      return a.key == b.key 
        ? a.val.localeCompare(b.val)
        : (a.key - b.key);
    })
    .map(function(v) {
      return v.val;
    })
    .join(" ");
}