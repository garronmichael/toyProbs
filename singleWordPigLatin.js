/*

Pig Latin is an English language game where the goal is to hide the meaning of the word from people not aware of the rules.

The rules themselves are rather easy:

1) The word starts with a vowel -> return the original string plus way

2) The word starts with a consonant -> move consonants from the beginning of the word to the end of the word until the first vowel, then return it plus ay

3) The result must be lowercase, regardless of the case of the input. If input string has any non-alpha characters, the function must return None, null (depending by language).

4) The function must also handle simple random strings and not just english words

5) The input string has no vowels -> return the original string plus ay

For example the word "spaghetti" become"aghettispay" because the first two letter ("sp") are consonants, so they are moved to the end of the string + "ay"

*/

var pigLatin = function(string) {
  string = string.toLowerCase();
  if(string.match(/[^A-Za-z]/)) {
    return null;
  } else if(!string.match(/[aeiou]/)) {
    return string + 'ay';
  } else if (string[0].match(/[aeiou]/)) {
    return string + 'way';
  } else {
    var indexOfFirstVowel = string.indexOf(string.match(/[aeiou]/)[0]);
    return string.slice(indexOfFirstVowel) + string.slice(0, indexOfFirstVowel) + 'ay';
  }
};

console.log(pigLatin('spaghetti'));

console.log(pigLatin('igloo'));

console.log(pigLatin('t3st'));