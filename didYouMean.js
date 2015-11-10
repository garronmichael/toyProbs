/*

I'm sure, you know Google's "Did you mean ...?", when you entered a search term and mistyped a word. 
In this kata we want to implement something similar.

You'll get an entered term (lowercase string) and an array of known words (also lowercase strings). 
Your task is to find out, which word from the dictionary is most similar to the entered one. 
The similarity is described by the minimum number of letters you have to add, 
remove or replace in order to get from the entered word to one of the dictionary. 
The lower the number of required changes, the higher the similarity between each two words.

Same words are obviously the most similar ones. A word that needs one letter to be changed is more 
similar to another word that needs 2 (or more) letters to be changed. E.g. the mistyped term berr 
is more similar to beer (1 letter to be replaced) than to barrel (3 letters to be changed in total).

Extend the dictionary in a way, that it is able to return you the most similar word from the list of known words.

Code Examples:

fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
fruits.findMostSimilar('strawbery'); // must return "strawberry"
fruits.findMostSimilar('berry'); // must return "cherry"

things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
things.findMostSimilar('coddwars'); // must return "codewars"

languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
languages.findMostSimilar('heaven'); // must return "java"
languages.findMostSimilar('javascript'); // must return "javascript" (same words are obviously the most similar ones)
I know, many of you would disagree that java is more similar to heaven than all the other ones, but in this kata it is ;)

Additional notes:

there is always exactly one possible solution


*/

function countLetters(word) {
  var obj = {};
  for(var i = 0; i < word.length; i++) {
    var char = word[i];
    var re = new RegExp(char, 'gi');
    obj[char] = word.match(re).length;
  }
  return [obj, word];
}

function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function(term) {
  // if the term is in the dictionary
  if(this.words.indexOf(term) > -1) {
    // return it
    return term;
  // otherwise
  } else {
    var leastDiff = term.length;
    var closestTerm;
    var words = this.words.map(countLetters);
    var term = countLetters(term);
    for(var i = 0; i < words.length; i++) {
      var curDiff = 0;
      var curWord = words[i];
      // each letter[value] in term must equal letter[value] in each word in words
      for(var letter in curWord[0]) {
        // each addition of a letter[value] to term to match letter[value] in word results in an increment to curDiff
        if(!term[0][letter] || curWord[0][letter] > term[0][letter]) {
          term[0][letter] = term[0][letter] || 0;
          curDiff += curWord[0][letter] - term[0][letter]++;
          term[0][letter] = curWord[0][letter];
        }
        // each removal of a letter results in an increment to curDiff
        if(curWord[0][letter] < term[0][letter]) {
          curDiff += term[0][letter] - curWord[0][letter];
          term[0][letter] = curWord[0][letter];
        }
      }
      // if the curDiff < leastDiff
      if(curDiff < leastDiff) {
        // there is a new leastDiff and closestTerm
        leastDiff = curDiff;
        closestTerm = curWord[1];
      }
    }
    return closestTerm; 
  }

}

var fruits = new Dictionary( ['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry'] );
console.log(fruits.findMostSimilar('strawbery')) // 'strawberry'
console.log(fruits.findMostSimilar('berry')); // must return "cherry"

things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
console.log(things.findMostSimilar('coddwars')); // must return "codewars"

languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
console.log(languages.findMostSimilar('heaven')); // must return "java"
console.log(languages.findMostSimilar('javascript')); // must return "javascript" (same words are obviously the most similar ones)
