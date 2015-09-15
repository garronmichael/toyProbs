/*

"7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?
Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

"Interesting" Numbers

Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

Any digit followed by all zeros: 100, 90000
Every digit is the same number: 1111
The digits are sequential, incementing†: 1234
The digits are sequential, decrementing‡: 4321
The digits are a palindrome: 1221 or 73837
The digits match one of the values in the awesomePhrases array
† For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

*/

function isInteresting(n, awesomePhrases) {

  Number.prototype.slice = function(x, y) {
    return parseInt(this.valueOf().toString().slice(x,y));
  };

  Number.prototype.split = function(v) {
    return this.valueOf().toString().split(v).map(Number);
  };
  
  if(n < 99) {
    return 0;
  }
   
  function digitFollowedByAllZeros(n) {
    if(!(n + 1).slice(1) || !(n + 2).slice(1)) {
      return 1;
    } else if(!parseInt(n.slice(1))) {
      return 2; 
    } else {
      return 0;
    }
  }


  function digitsAreAllTheSame(n) {
    n = n.split();
    var prevDigit;
    var curDigit;
    for(var i = 0; i < n.length; i++) {
      curDigit = n[i];
      if(i === 0) {
        prevDigit = n[i];
      }
      if(curDigit !== prevDigit) {
        return 0;
      }
      if(i === n.length - 1 && prevDigit - curDigit < 2) {
        return 1;
      } 
    }
    return 2;
  }
  function digitsAreSequential(n) {
    return 0;
  }
  function digitIsAPalindrome(n) {
    return 0;
  }
  function digitIsInAwesomePhrases(n, awesomePhrases) {
    return 0;
  }
  
  var nIsInteresting = digitFollowedByAllZeros(n) || digitsAreAllTheSame(n) || digitsAreSequential(n) || digitIsAPalindrome(n) || digitIsInAwesomePhrases(n);

  return !!nIsInteresting ? nIsInteresting : 0;
  

}

console.log(isInteresting(3, [1337, 256])); // returns 0

console.log(isInteresting(1000)); // returns 2

console.log(isInteresting(998)); // returns 1

console.log(isInteresting(3333)); // returns 2;

console.log(isInteresting(3331)); // returns 1;

// console.log(isInteresting(1336, [1337, 256])); // returns 1

// console.log(isInteresting(1337, [1337, 256]); // returns 2

// console.log(isInteresting(1121, [1337, 256])); // returns 2

// console.log(isInteresting(11209, [1337, 256])); // returns 1

// console.log(isInteresting(11208, [1337, 256])); // returns 0