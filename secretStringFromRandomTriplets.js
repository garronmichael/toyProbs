/*

There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. 
"whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient 
information to deduce the original string. In particular, this means that the secret string will never contain letters that do not 
occur in one of the triplets given to you.

*/

var recoverSecret = function(triplets) {
  var scrambled = [];
  triplets.forEach(function(triplet) {
    triplet.forEach(function(curChar) {
      var curCharIdx = scrambled.indexOf(curChar);
      if(curCharIdx < 0) {
        scrambled.push(curChar);
      }
    });
  });

  triplets.forEach(function(triplet) {
    triplet.forEach(function(curChar, index, triplet) {
      var curCharIdx = scrambled.indexOf(curChar);
      var charAfter = triplet[index - 1];
      var charBefore = triplet[index + 1];
      var curCharIsAfterIdx = scrambled.indexOf(charAfter);
      var curCharIsBeforeIdx = scrambled.indexOf(charBefore);
      if(curCharIsBeforeIdx > -1 && curCharIdx > curCharIsBeforeIdx) {
        scrambled.splice(curCharIdx, 1);
        scrambled.splice(curCharIsBeforeIdx, 0, curChar);
        curCharIsAfterIdx = scrambled.indexOf(charAfter);
        curCharIdx = scrambled.indexOf(curChar);
      }
      if(curCharIsAfterIdx > -1 && curCharIdx < curCharIsAfterIdx) {
        scrambled.splice(curCharIdx, 1);
        scrambled.splice(curCharIsAfterIdx, 0, curChar);
      }
    });
  });
  return scrambled.join('');
};

secret1 = "whatisup"
triplets1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]

console.log(recoverSecret(triplets1)) // Should be true

