function validBraces(braces){
  var open = [];
  for(var i = 0; i < braces.length; i++) {
    var v = braces[i];
    if(v === '(' || v === '[' || v=== '{') {
      open.push(v);
    } else {
      var pair = open.pop() + v;
      if(!(pair === '()' || pair === '[]' || pair === '{}')) {
        return false;
      }
    }
  }

  return open.length === 0;
}

console.log(validBraces('{]'));
console.log(validBraces('{([])}'));

// Solution

function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}