/*

In order to stop too much communication from happening, your overlords declare that you are no longer allowed to use certain functionality in your code!

Disallowed functionality:

Strings
Numbers
Regular Expressions
Functions named "Hello", "World", "HelloWorld" or anything similar.
Object keys named "Hello", "World", "HelloWorld" or anything similar.
Without using the above, output the string "Hello World!" to prove that there is always a way.

*/

var helloWorld = function () {
  var one = +true;
  var five = one + one + one + one + one;
  var ten = five + five;
  var hundred = ten * ten;
  var H = (five + one + one) * ten + (one + one); 
  var e = hundred + one; 
  var l = hundred + (ten - one - one); 
  var o= hundred + ten + one; 
  var space = ten * (one + one + one) + one + one; 
  var W = hundred - ten - one - one - one; 
  var r = hundred + ten + five - one; 
  var d = hundred; 
  var exclamation = ten * (one + one + one) + one + one + one; 
  return String.fromCharCode(H, e, l, l, o, space, W, o, r, l, d, exclamation);
};

console.log(helloWorld());

// Solution (My solution is correct but there is apparently a platform bug)

var helloWorld = function () {
  var one = +true
  var two = one + one
  var four = two + two
  var eight = four + four
  var sixteen = eight + eight
  var thirtytwo = sixteen + sixteen
  var sixtyfour = thirtytwo + thirtytwo
  var sp = thirtytwo
  var excl = thirtytwo + one
  var H = sixtyfour + eight
  var e = sixtyfour + thirtytwo + four + one
  var l = sixtyfour + thirtytwo + eight + four
  var o = sixtyfour + thirtytwo + sixteen - one
  var W = sixtyfour + sixteen + eight - one
  var r = sixtyfour + thirtytwo + sixteen + two
  var d = sixtyfour + thirtytwo + four
  return [H, e, l, l, o, sp, W, o, r, l, d, excl].map(function (c) { return String.fromCharCode(c) }).join([])
}