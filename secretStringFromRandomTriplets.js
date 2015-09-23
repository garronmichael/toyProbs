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
  var secret = 'whatisup';
  var scrambled = [];
  triplets.forEach(function(triplet) {
    triplet.forEach(function(curChar, index, triplet) {
      var curCharIdx = scrambled.indexOf(curChar);
      var after = triplet[index - 1];
      var before = triplet[index + 1];
      var afterIdx = scrambled.indexOf(after);
      var beforeIdx = scrambled.indexOf(before);
      if(beforeIdx > -1 || afterIdx > -1) {
        if(beforeIdx > -1 && curCharIdx > beforeIdx) {
          var rest = scrambled.splice(beforeIdx);
          scrambled.push(curChar);
          scrambled = scrambled.concat(rest);
        }
        if(afterIdx > -1 && curCharIdx < afterIdx) {
          var rest = scrambled.splice(0, afterIdx + 1);
          scrambled.splice(curCharIdx, 1);
          scrambled.shift(curChar);
          scrambled = rest.concat(scrambled); 
        }
      } else {
        scrambled.push(curChar);
        console.log('pushed', curChar);
      }
      // else if(index === 0) {
      //   console.log('scram', scrambled);
      //   console.log('first repeat', char);
      //   if(scrambledCharIdx > scrambled.indexOf(triplet[index + 1])) {
      //     var rest = scrambled.splice(scrambled.indexOf(triplet[index + 1]));
      //     scrambled.splice(scrambledCharIdx, 1);
      //     scrambled.push(char);
      //     scrambled.concat(rest); 
      //   }
      //   console.log('scram', scrambled);
      // } else if(index === 1) {
      //   if(scrambledCharIdx > scrambled.indexOf(triplet[index + 1])) {
      //     var rest = scrambled.splice(scrambled.indexOf(triplet[index + 1]));
      //     scrambled.splice(scrambledCharIdx, 1);
      //     scrambled.push(char);
      //     scrambled.concat(rest); 
      //   }
      //   if(scrambledCharIdx < scrambled.indexOf(triplet[index - 1])) {
      //     var rest = scrambled.splice(0, scrambled.indexOf(triplet[index - 1]));
      //     scrambled.splice(scrambledCharIdx, 1);
      //     scrambled.shift(char);
      //     scrambled = rest.concat(scrambled); 
      //   }
      // } else if(index === 2) {
      //   if(scrambledCharIdx < scrambled.indexOf(triplet[index - 1])) {
      //     var rest = scrambled.splice(0, scrambled.indexOf(triplet[index - 1]));
      //     scrambled.splice(scrambledCharIdx, 1);
      //     scrambled.shift(char);
      //     scrambled = rest.concat(scrambled); 
      //   }
      // }
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