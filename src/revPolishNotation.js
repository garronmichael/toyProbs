/* 

Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

Note that for simplicity you may assume that there are always spaces between numbers and operations, e.g. 1 3 + expression is valid, but 1 3+ isn't.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).

*/

function calc(expr) {
  if(expr === '') {
    return 0;  
  } else {
    var operator = {
                    '+': function(a,b) {return a + b;},
                    '-': function(a,b) {return a - b;},
                    '*': function(a,b) {return a * b;},
                    '/': function(a,b) {return a / b;}
                    }
    var stack = [];
    var expr = expr.split(' ');
    for(var i = 0; i < expr.length; i++) {
      if(!operator[expr[i]]) {
        stack.push(expr[i]);
        console.log(stack);
      } else {
        var b = +stack.pop();
        var a = +stack.pop();
        stack.push(operator[expr[i]](a, b));
        console.log(stack);
      }
    }
  }
  return +stack[stack.length - 1];
}

console.log(calc('3 3 * 4 +'));

// Solution

function calc(expr) {  
  var result = [];
  var atoms = expr.split(/\s+/);
  var operators = ['+', '-', '*', '/'];
  for (var i=0; i<atoms.length; i++) {
    switch(atoms[i]) {
      case '+': result.push(result.pop() + result.pop()); break;
      case '-': result.push(-result.pop() + result.pop()); break;
      case '*': result.push(result.pop() * result.pop()); break;
      case '/': result.push(1 /(result.pop() / result.pop())); break;
      default: result.push(parseFloat(atoms[i]));
    }
  }
  return result.pop() || 0;
}