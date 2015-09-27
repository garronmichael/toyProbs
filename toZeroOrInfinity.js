/* 

Consider the following numbers (where n! is factorial(n)):

u1 = (1 / 1!) * (1!)

u2 = (1 / 2!) * (1! + 2!)

u3 = (1 / 3!) * (1! + 2! + 3!)

un = (1 / n!) * (1! + 2! + 3! + ... + n!)

Which will win: 1 / n! or (1! + 2! + 3! + ... + n!)?

Are these number going to 0 because of 1/n! or to infinity due to the sum of factorials?

Task:

Calculate (1 / n!) * (1! + 2! + 3! + ... + n!) for a given n. Call this function "going(n)" where n is an integer greater or equal to 1.

To avoid discussions about rounding, if the result of the calculation is designed by "result", going(n) will return "result" truncated to 6 decimal places.

Examples:

1.0000989217538616 will be truncated to 1.000098

1.2125000000000001 will be truncated to 1.2125

Remark:

Keep in mind that factorials grow rather rapidly, and you can need to handle large inputs.

*/

function going(n) {
  function factorial(n) {
    if(n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  function factorialSum(n) {
    if(n === 0) {
      return 0;
    } else {
      return factorial(n) + factorialSum(n - 1);
    }
  }
  
  console.log('factorial', factorial(n));
  console.log('factorial sum', factorialSum(n));
  console.log('output', 1 / factorial(n) * factorialSum(n) );
  var value = 1 / factorial(n) * factorialSum(n);

  return parseFloat( value.toString().split('').slice(0, 8).join('') );
}

console.log(going(5)); // 1.275
console.log(going(6)); // 1.2125
console.log(going(7)); // 1.173214
console.log(going(10000));

// Solution

function going (n) {
  var result = 1
  var acc = 1

  while (n > 1) {
    acc *= 1 / n
    result += acc
    n--
  }

  return Math.floor(result * 1e6) / 1e6
}