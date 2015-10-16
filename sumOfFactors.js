/*

Given an array of positive or negative integers

I= [i1,..,in]

you have to produce a sorted array P of the form

[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java or C# and as an array of arrays in other languages.

Example:

I = [12, 15] 
result = [[2, 12], [3, 27], [5, 15]]
[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

Note: It can happen that a sum is 0 if some numbers are negative!

Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

*/

function sumOfDivided(lst) {
  var primes = [2];
  var allFactors = [];

  function isPrime(n) {
    if(primes.indexOf(n) < 0) {
      if(n > 0) {
        for(let i = 2; i < n; i++) {
          if(n % i === 0) {
            return false;
          }
        }
      } else {
        for(let i = -2; i > n; i--) {
          if(n % i === 0) {
            return false;
          }
        }
      }
      primes.push(n);
      return true;
    } else {
      return true;
    }
  }

  function findFactors(n) {
    var factors = [];
    if(n > 0) {
      for(let i = 2; i <= n; i++) {
        if(n % i === 0) {
          factors.push(i);
        }
      }
    } else {
      for(let i = -2; i >= n; i--) {
        if(n % i === 0) {
          factors.push(i * -1);
        }
      }
    }
    return factors;
  }

  function sumFactors(arr) {
    var cur;
    for(let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
        let cur = arr[i];
        let tuple = arr[j];
        if(Math.abs(tuple[0]) === Math.abs(cur[0])) {
          cur[1] += tuple[1];
          arr.splice(j, 1);
          j--;
        }
      }
    }
    return arr;
  }

  lst.forEach( (v, i, a) => {
    var factors = findFactors(v);
    if(factors.length > 0) {
      var primeFactors = factors.filter(isPrime);
      primeFactors.forEach( (w, j, b) => {
        allFactors.push([w, v]);
      });
    }
  });
  return sumFactors(allFactors).sort(function(a, b) { return a[0] - b[0] });
}

// console.log(sumOfDivided([12, 15])); // [ [2, 12], [3, 27], [5, 15] ]
// console.log(sumOfDivided([15,21,24,30,45])); // [ [2, 54], [3, 135], [5, 90], [7, 21] ])

// console.log(sumOfDivided([17,-17,51,-51])); // Expected: [[3,0],[17,0]], instead got: [[3,51],[17,51]]
// console.log(sumOfDivided([ 15, 21, 24, 30, -45 ])); // Expected: [[2,54],[3,45],[5,0],[7,21]], instead got: [[-15,-45],[-9,-45],[2,54],[3,45],[5,0],[7,21]]
// console.log(sumOfDivided([ 107, 158, 204, 100, 118, 123, 126, 110, 116, 100 ])); // Expected: [[2,1032],[3,453],[5,310],[7,126],[11,110],[17,204],[29,116],[41,123],[59,118],[79,158],[107,107]], instead got: [[2,1032],[3,453],[5,310],[7,126],[11,110],[17,204],[29,116],[41,123],[59,118],[79,158]]
console.log(sumOfDivided([ -29804, -4209, -28265, -72769, -31744 ])) // Expected: [[2,-61548],[3,-4209],[5,-28265],[23,-4209],[31,-31744],[53,-72769],[61,-4209],[1373,-72769],[5653,-28265],[7451,-29804]], instead got: [[-7451,-29804],[-5653,-28265],[-1373,-72769],[-61,-4209],[-53,-72769],[-31,-31744],[-23,-4209],[-5,-28265],[-3,-4209],[-2,-61548]]

