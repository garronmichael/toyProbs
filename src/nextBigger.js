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

// Solution #1

function nextBigger(n){
  var digits = (''+n).split('').map((e) => +e);
  var max = 0;
  for (var cut = digits.length - 1; digits[cut] >= max; cut --) {
    if (digits[cut] > max) max = digits[cut];
  }
  if (cut == -1) return -1;
  var head = (cut > 0) ? digits.slice(0,cut) : [];
  var paste = 0;
  var limit = digits[cut];
  var best = 10;

  var tail = digits.slice(cut+1);
  for (var i = 0; i<tail.length; i++) {
    if(tail[i] > limit && tail[i] < best) {
      best = tail[i];
      paste = i;
    }
  }
  tail[paste] = limit;
  tail = tail.sort();
  var headVal = (head.reduce((r,e) => r*10+e, 0)*10+best);
  return tail.reduce((r,e) => r*10+e, headVal);
}
