/*

Extend the String object to create a function that converts the value of the String to and from Base64 using the ASCII character set.

Usage:

// should return 'dGhpcyBpcyBhIHN0cmluZyEh'
'this is a string!!'.toBase64(); 

// should return 'this is a string!!'
'dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64();
You can learn more about Base64 encoding and decoding

*/

// Extend the String object with toBase64() and fromBase64() functions

String.prototype.toBase64 = function() {
  var string = this.valueOf().split(''), 
      output = [];
  console.log(string);
  string.forEach( (v, i, a) => {
    v = v.charCodeAt(0).toString(2);
    while(v.length < 8) {
    v = '0'.concat(v);
    }
    a[i] = v;
  });
  string = string.join('').split('');
  while(string.length) {
    output.push(string.splice(0, 6).join(''));
  }
  
  output.forEach( (v, i, a) => {
    console.log(v);
    a[i] = String.fromCharCode(parseInt(v, 2) + 64);
  });
  
  return output.join('');
  
}

String.prototype.fromBase64 = function() {
 var string = this.valueOf();
}
