function sumStrings(a, b) { 
  var sum = '';
  var carryOver = 0;
  var numToAdd;
  function pad(str, count) {
    while(count > 0) {
      str = '0' + str;
      count--;
    }
    return str;
  }
  var diff = a.length - b.length;
  b = pad(b, diff);
  a = pad(a, diff * -1);
  
  for(var i = a.length - 1; i > -1; i--) {
    numToAdd = ( (+a[i] + +b[i] + carryOver) % 10 ).toString();
    sum = sum + numToAdd;
    carryOver = Math.floor((+a[i] + +b[i] + carryOver) / 10)
  }
  sum = carryOver > 0 ? sum + carryOver.toString() : sum;
  sum = sum.split('').reverse().join('');
  return sum[0] === '0' ? sum.slice(1) : sum;
}

// console.log(sumStrings('5', '1'));
// console.log(sumStrings('00103', '08567'));
// console.log(sumStrings('0800', '9567'));

// Solution

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
};

function sumStrings(a,b) {
  a = a.reverse(); b = b.reverse();
  var carry = 0;
  var index = 0;
  var sumDigits = [];
  while (index < a.length || index < b.length || carry != 0) {
    var aDigit = index < a.length ? parseInt(a[index]) : 0;
    var bDigit = index < b.length ? parseInt(b[index]) : 0;
    var digitSum = aDigit + bDigit + carry;
    sumDigits.push((digitSum % 10).toString());
    carry = Math.floor(digitSum / 10);
    index++;
  }
  sumDigits.reverse();
  while (sumDigits[0] == '0') sumDigits.shift();
  return sumDigits.join('');
}