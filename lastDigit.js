var lastDigit = function(str1, str2){
  var n = parseInt(str1[str1.length - 1]);
  var lib = { 0: [0,0,0,0], 
              1: [1,1,1,1], 
              2: [6,2,4,8], 
              3: [1,3,9,7], 
              4: [6,4,6,4], 
              5: [5,5,5,5],
              6: [6,6,6,6], 
              7: [1,7,9,3], 
              8: [6,8,4,2], 
              9: [1,9,1,9] 
            };
  var x = parseInt(str2) % 4;
  return lib[n][x];
};