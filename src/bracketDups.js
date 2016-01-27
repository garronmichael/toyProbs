/*

Create a program that will take in a string as input and, if there are duplicates of 

more than two alphabetical characters in the string, returns the string with all the extra 

characters in a bracket.

For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.

*/

// pretty close solution, but does not account for all cases

function stringParse(string){
  //your code here
  // check for valid inputs
  if(typeof string !== 'string') {
    return 'Please enter a valid string';
  }

  var obj = {};
  var output = '';

  for(var i = 0; i < string.length; i++) {
    // if a letter exists
    if(obj[string[i]]) {
      // increment the letter count 
      obj[string[i]]++;
    } else {
      // otherwise set the letter to one
      obj[string[i]] = 1;
    }
    
    // if we are on the third duplicated
    if(obj[string[i]] === 3 && string[i] === string[i - 1 ]) {
      // add a opening bracket to the output string before the current letter
      output += '[' + string[i];
    // if the cur letter is diff from the prev letter and the prev letter has more than two dups
    } else if(string[i - 1] !== undefined && string[i] !== string[i - 1] && obj[string[i - 1]] > 2 && string[i - 1] === string[i - 3]) {
      // add a closing bracket to the output string before the current letter
      output += ']' + string[i];
    } else {
      // otherwise add the letter to the output
      output += string[i];
    }
  }

  // if the last letter added has more than two dups
  if(obj[output[output.length - 1]] > 2 && output[output.length - 1] === output[output.length - 3]) {
    // add a closing bracket
    output += ']'
  }
  // return the output string
  return output;
}

console.log(stringParse('boopdedoop'));
// does not work for 'heeelllllooooollolo'
console.log(stringParse('heeelllllooooollolo'));