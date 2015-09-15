/*

Write function scramble(str1,str2) that returns true if a portion of str1 
characters can be rearranged to match str2, otherwise returns false.

For example:
str1 is 'rkqodlw' and str2 is 'world' the output should return true.
str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
str1 is 'katas' and str2 is 'steak' should return false.

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered

*/

function scramble(str1, str2) {
 var dict = {};
 for(var i = 0; i < str1.length; i++) {
  var char1 = str1[i];
  if(dict[char1]) {
    dict[char1]++; 
  } else {
    dict[char1] = 1
  }
 }
 for(var j = 0; j < str2.length; j++) {
  var char2 = str2[j];
  if(dict[char2] && dict[char2] > 0) {
    dict[char2]--;
  } else {
    return false;
  }
 }
 return true;
}

console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak'));


// Solution 1

function scramble(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
  return str2.split("").every((character) => --occurences[character] >= 0);
}

// Solution 2

const count = (s) => {
  const base = 'a'.charCodeAt(0);
  const arr = [];
  for (let i = 0; i < 26; ++i) arr[i] = 0;
  
  for (let i = 0; i < s.length; ++i) {
    const code = s.charCodeAt(i) - base;
    ++arr[code];
  }
  return arr;
}

function scramble(str1, str2) {
 const haystack = count(str1);
 const needle = count(str2);
 
 for (var i = 0; i < needle.length; ++i) {
   if (needle[i] > haystack[i]) return false;
 }
 
 return true;
}