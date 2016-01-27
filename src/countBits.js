var countBits = function(n) {
  var bits = n.toString(2).match(/1/g);
  return bits === null ? 0 : bits.length;
};

console.log(countBits(0));
console.log(countBits(4));