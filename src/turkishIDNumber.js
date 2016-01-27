function checkValidTrNumber(n) {
  if(typeof n === 'string') {
    for(var i = 0; i < n.length; i++) {
      if(typeof n[i] !== 'number') {
        return false;
      }
    }
  }
  if(typeof n === 'number') {
   n = n.toString();
  }
  if(n.length !== 11) {
    return false;
  } else {
  var sumOf1st3rd5th7th9th = parseInt(n[0]) + parseInt(n[2]) + parseInt(n[4]) + parseInt(n[6]) + parseInt(n[8]);
  var sumOf2nd4th6th8th = parseInt(n[1]) + parseInt(n[3]) + parseInt(n[5]) + parseInt(n[7]);
  return ( ( sumOf1st3rd5th7th9th * 7 - sumOf2nd4th6th8th ) % 10 ) === parseInt(n[9]) &&
         ( ( sumOf1st3rd5th7th9th + sumOf2nd4th6th8th + parseInt(n[9]) ) % 10 ) === parseInt(n[10]);
  }
}

console.log(checkValidTrNumber('x5810a78432'));
console.log(checkValidTrNumber(36637640050));