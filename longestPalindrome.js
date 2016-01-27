/*
Longest Palindrome

Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, return value must be 0.

Example:

"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

var longestPalindrome = function(s){
  if(s.length === 1) {
    return 1;
  }
  var longestPalindrome = 0;
  var substrings = [];
  var substring = ''
  for( var i = 0; i < s.length; i++ ) {
    substring += s[i];
    substrings.push(substring);
    for(var j = i + 1; j < s.length; j++) {
      substring += s[j];
    }
    substrings.push(substring);
    substring = '';
  }
  console.log(substrings);
    substrings.forEach( v => {
      var firstHalf = v.slice( 0, Math.floor( v.length / 2 ) ),
          secondHalf = v.slice( Math.floor( v.length / 2 ), v.length).split('').reverse().join('');
      if( firstHalf === secondHalf ) {
        if(v.length > longestPalindrome) {
          longestPalindrome = v.length;
        }
      }
    });
  return longestPalindrome;
};

console.log( longestPalindrome("a") ) // 1
console.log( longestPalindrome("aa") ) // 2
console.log( longestPalindrome("baa") ) // 2
console.log( longestPalindrome("aab") ) // 2
// console.log( longestPalindrome("zyabyz") ) // 6 // "Are you sure that is a palindrome?"
// console.log( longestPalindrome("baabcd") ) // 4
// console.log( longestPalindrome("baablkj12345432133d") ) // 9