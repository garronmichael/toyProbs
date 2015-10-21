/* 

In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

Examples:

"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919
Additional Notes:

The minimum number is "zero" (inclusively)
The maximum number, which must be supported is 1 million (inclusively)
The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
All tested numbers are valid, you don't need to validate them

*/

const dict = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10,
  'twenty': 20,
  'thirty': 30,
  'forty': 40,
  'fifty': 50,
  'sixty': 60,
  'seventy': 70,
  'eighty': 80,
  'ninety': 90,
  'hundred': 100,
  'thousand': 1000,
  'million': 1000000,
};


function parseInt(string) {
  var num = string.split(/\W/);
  var output = num.map( (v, i, a) => {
    return v = dict[v];
  });
  output.forEach( (v, i, a) => {
    (a[i] > a[i - 1]) ? (a[i] = a[i - 1] * a[i], a[i - 1] = 0) : a[i];
  });

  return output.reduce( (p, c) => { return p + c });
}

console.log(parseInt('one')); // 1
console.log(parseInt('twenty')); // 20
console.log(parseInt('two hundred forty-six')); // 246
console.log(parseInt('one million three hundred thousand six'));