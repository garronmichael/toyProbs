/*

You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:

nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1

*/

function nextBigger(n){
  var combos = [n],
      m = n.toString(10).split(''),
      nextBiggest;
  for(var j = 0; j < m.length; j++) {
    for(var i = m.length - 1; i > 0; i--) {
      var numToMove = m[i];
      m[i] = m[i - 1];
      m[i - 1] = numToMove;
      combos.push(parseInt(m.join('')));
    }    
  } 
  combos.sort(function(a, b) { return a - b });
  console.log(combos);
  nextBiggest = combos[combos.lastIndexOf(n) + 1]
  return nextBiggest || -1;
} 

// console.log(nextBigger(12)) // 21
// console.log(nextBigger(513)) // 531
// console.log(nextBigger(414)) // 441
// console.log(nextBigger(144)) // 414
// console.log(nextBigger(9)); // -1
// console.log(nextBigger(111)); // -1
// console.log(nextBigger(531)); // -1
console.log(nextBigger(1234567890)); // expected: 1234567908 got: 123456798
// console.log(nextBigger(59884848459853)); // expected: 59884848483559 got: 84459853598848
