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