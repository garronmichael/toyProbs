/*

Given two arrays of strings a1 and a2 return a sorted array in lexicographical order and without duplicates of the strings of a1 which are substrings of strings of a2.

Example: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

*/


// my solution
function inArray(array1,array2){
  var output = [];
  // iterate over array1
  for(var i = 0; i < array1.length; i++) {
    var re = new RegExp(array1[i], 'g');
    // iterate over array2
    for(var j = 0; j < array2.length; j++) {
      // if array1 string is a substring of any of array2 strings
      var matches = array2[j].match(re);
      if(matches) {
        // add array1 string to output array
        if(output.indexOf(array1[i]) < 0) {
          output.push(matches[0]);
        }
      }
    }
  } 

  // return output array
  return output.sort();
}

// given solution

function inArray(array1,array2){
  var res = [];
  for (var i = 0; i < array2.length; i++){
    for (var j = 0; j < array1.length; j++){
      if (array2[i].match(array1[j]) && res.indexOf(array1[j]) < 0){
        res.push(array1[j]);
      }
    }
  }
  return res.sort();
}