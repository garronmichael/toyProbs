/*

Extend the String object to create a function that converts the value of the String to and from Base64 using the ASCII character set.

'Usage':

// should return 'dGhpcyBpcyBhIHN0cmluZyEh'
'this is a string!!'.toBase64(); 

// should return 'this is a string!!'
'dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64();
You can learn more about Base64 encoding and decoding

*/

// Extend the String object with toBase64() and fromBase64() functions

var lib1 = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
  4: 'E',
  5: 'F',
  6: 'G',
  7: 'H',
  8: 'I',
  9: 'J',
  10: 'K',
  11: 'L',
  12: 'M',
  13: 'N',
  14: 'O',
  15: 'P',
  16: 'Q',
  17: 'R',
  18: 'S',
  19: 'T',
  20: 'U',
  21: 'V',
  22: 'W',
  23: 'X',
  24: 'Y',
  25: 'Z',
  26: 'a',
  27: 'b',
  28: 'c',
  29: 'd',
  30: 'e',
  31: 'f',
  32: 'g',
  33: 'h',
  34: 'i',
  35: 'j',
  36: 'k',
  37: 'l',
  38: 'm',
  39: 'n',
  40: 'o',
  41: 'p',
  42: 'q',
  43: 'r',
  44: 's',
  45: 't',
  46: 'u',
  47: 'v',
  48: 'w',
  49: 'x',
  50: 'y',
  51: 'z',
  52: '0',
  53: '1',
  54: '2',
  55: '3',
  56: '4',
  57: '5',
  58: '6',
  59: '7',
  60: '8',
  61: '9',
  62: '+',
  63: '/'
};

var lib2 = {
  'A': 0,
  'B': 1,
  'C': 2,
  'D': 3,
  'E': 4,
  'F': 5,
  'G': 6,
  'H': 7,
  'I': 8,
  'J': 9,
  'K': 10,
  'L': 11,
  'M': 12,
  'N': 13,
  'O': 14,
  'P': 15,
  'Q': 16,
  'R': 17,
  'S': 18,
  'T': 19,
  'U': 20,
  'V': 21,
  'W': 22,
  'X': 23,
  'Y': 24,
  'Z': 25,
  'a': 26,
  'b': 27,
  'c': 28,
  'd': 29,
  'e': 30,
  'f': 31,
  'g': 32,
  'h': 33,
  'i': 34,
  'j': 35,
  'k': 36,
  'l': 37,
  'm': 38,
  'n': 39,
  'o': 40,
  'p': 41,
  'q': 42,
  'r': 43,
  's': 44,
  't': 45,
  'u': 46,
  'v': 47,
  'w': 48,
  'x': 49,
  'y': 50,
  'z': 51,
  '0': 52,
  '1': 53,
  '2': 54,
  '3': 55,
  '4': 56,
  '5': 57,
  '6': 58,
  '7': 59,
  '8': 60,
  '9': 61,
  '+': 62,
  '/': 63
};

String.prototype.toBase64 = function() {

  function convertToBinaryOctets(arr) {
    arr.forEach( function(v, i, a) {
      v = v.charCodeAt(0).toString(2);
      while(v.length < 8) {
      v = '0'.concat(v);
      }
      a[i] = v;
    });
    return arr;
  }

  function convertOctetsToSextets(arr) {
    var output = [];
    arr = arr.join('').split('');
    while(arr.length) {
      output.push(arr.splice(0, 6).join(''));
    }
    return output;
  }

  function convertSextetsToChars(arr) {
    arr.forEach( function(v, i, a) {
      a[i] = lib1[parseInt(v, 2)];
    });
    return arr.join('');
  }
  
  return convertSextetsToChars( convertOctetsToSextets( convertToBinaryOctets( this.valueOf().split('') ) ) );
  
};

String.prototype.fromBase64 = function() {

  function convertCharsToSextets(arr) {
    arr.forEach( function(v, i, a) {
      v = lib2[v].toString(2);
      while(v.length < 6) {
      v = '0'.concat(v);
      }
      a[i] = v;
    });
    return arr;
  }

  function convertSextetsToOctets(arr) {
    var output = [];
    arr = arr.join('').split('');
    while(arr.length) {
      output.push(arr.splice(0, 8).join(''));
    }
    return output;
  }

  function convertOctetsToChars(arr) {
    arr.forEach( function(v, i, a) {
      a[i] = String.fromCharCode(parseInt(v, 2));
    });
    return arr.join('');
  }


  return convertOctetsToChars( convertSextetsToOctets( convertCharsToSextets( this.valueOf().replace(/=/g, '').split('') ) ) );

};

// console.log('Man'.toBase64());
// console.log('TWFu'.fromBase64());
// console.log('this is a string!!'.toBase64());
// console.log('dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64());

console.log('dGVzdA=='.fromBase64());
console.log('test'.toBase64());

// Solution

String.prototype.toBase64 = function() {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var encoded = '';
  
  for(var i=0; i < this.length; i+=3) {
    var c1 = this.charCodeAt(i), 
        c2 = this.charCodeAt(i+1), 
        c3 = this.charCodeAt(i+2);
    encoded += chars[(c1 & 0xFC) >> 2];
    encoded += chars[((c1 & 0x03) << 4) | ((c2 & 0xF0) >> 4)];
    encoded += chars[((c2 & 0x0F) << 2) | ((c3 & 0xC0) >> 6)];
    encoded += chars[c3 & 0x3F];
  }
  
  return encoded;
};

String.prototype.fromBase64 = function() {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var decoded = '';
  
  for(var i=0; i < this.length; i+=4) {
    var c1 = chars.indexOf(this[i]), 
        c2 = chars.indexOf(this[i+1]), 
        c3 = chars.indexOf(this[i+2]),
        c4 = chars.indexOf(this[i+3]);
    decoded += String.fromCharCode(((c1) << 2) | ((c2 & 0x30) >> 4));
    decoded += String.fromCharCode(((c2 & 0x0F) << 4) | ((c3 & 0xFC) >> 2));
    decoded += String.fromCharCode(((c3 & 0x03) << 6) | c4);
  }
  
  return decoded;
};