/*

Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

1+1+1+1, 1+1+2, 2+2.
The order of coins does not matter:

1+1+2 == 2+1+1
Also, assume that you have an infinite ammount of coins.

Your function should take an amount to change and an array of unique denominations for the coins:

  countChange(4, [1,2]) // => 3
  countChange(10, [5,2,3]) // => 4
  countChange(11, [5,7]) //  => 0

*/

var countChange = function(money, coins) {
  var count = 0;
  var combos = [];
  var curCombo = [];

  var recurse = function(curTotal) {
    curTotal = curTotal || 0;
    if(curTotal === money && !combos[curCombo.slice().sort().toString()]) {
      combos[curCombo.slice(0).sort().toString()] = true;
      count++;
      return;
    } else if(curTotal > money) {
      return;
    } else {
      for(var i = 0; i < coins.length; i++) {
        curTotal += coins[i];
        curCombo.push(coins[i]);
        recurse(curTotal);
        curCombo.pop(coins[i]);
        curTotal -= coins[i];
      }
    }
  }

  recurse();
  return count;
}

console.log(countChange(4, [1,2]));
console.log(countChange(10, [5,2,3]));
console.log(countChange(11, [5,7]));

// Solution 1

var countChange = function(money, coins) {
    return findComboCount(money, coins, 0);
}

function findComboCount(money, coin, index) {
  if(money === 0){
    return 1;
  }
  else if (money < 0 || coin.length == index) {
    return 0;
  }
  else {
    var withFirstCoin = findComboCount(money - coin[index], coin, index);
    var withoutFirstCoin = findComboCount(money, coin, index + 1);
    return withFirstCoin + withoutFirstCoin;
  }
} 

// Solution 2

var countChange = function(money, coins) {
  if(money < 0 || coins.length === 0)
    return 0
  else if(money === 0)
    return 1
  else
    return countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
}