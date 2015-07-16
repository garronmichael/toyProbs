/*

Take the following IPv4 address: 128.32.10.1

This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361

Write a function int32_to_ip(int32) (JS: int32ToIp(int32), Haskell: int32ToIP) that takes a 32 bit number and returns a string representation of its IPv4 address.

  int32ToIp(2149583361) => "128.32.10.1"

*/

function int32ToIp(int32){
  if(int32 === 0) return '0.0.0.0';
  var bits = int32.toString(2);
  var ip;
  for(var i = 8; i < bits.length; i = i + 9) {
    bits = bits.slice(0, i) + '.' + bits.slice(i);
  }
  ip = bits.split('.');
  for(var j = 0; j < ip.length; j++) {
    ip[j] = parseInt(ip[j], 2);
  }
  
  return ip.join('.');
}

console.log(int32ToIp(2149583361)); //  int32ToIp(2149583361) => "128.32.10.1"
console.log(int32ToIp(2154959208));// int32ToIp(2154959208) => "128.114.17.104"
console.log(int32ToIp(0));

// Solution:

function int32ToIp(int32){

 return (
          ((int32 >> 24) & 0xFF) + "." +
          ((int32 >> 16) & 0xFF) + "." +
          ((int32 >>  8) & 0xFF) + "." +
          ((int32) & 0xFF)
        );
 
}