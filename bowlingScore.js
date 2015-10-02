/*

Task

Your task is to write a function for calculating the score of a 10 pin bowling game. The input for the function is a list of pins knocked down per roll for one player. Output is the player's total score.

Rules

General rules

Rules of bowling in a nutshell:

A game consists of 10 frames. In each frame the player rolls 1 or 2 balls, except for the 10th frame, where the player rolls 2 or 3 balls.
The total score is the sum of your scores for the 10 frames
If you knock down fewer than 10 pins with 2 balls, your frame score is the number of pins knocked down
If you knock down all 10 pins with 2 balls (spare), you score the amount of pins knocked down plus a bonus - amount of pins knocked down with the next ball
If you knock down all 10 pins with 1 ball (strike), you score the amount of pins knocked down plus a bonus - amount of pins knocked down with the next 2 balls
Rules for 10th frame

As the 10th frame is the last one, in case of spare or strike there will be no next balls for the bonus. To account for that:

if the last frame is a spare, player rolls 1 bonus ball.
if the last frame is a strike, player rolls 2 bonus balls.
These bonus balls on 10th frame are only counted as a bonus to the respective spare or strike.

More information

http://en.wikipedia.org/wiki/Ten-pin_bowling#Scoring

Input

You may assume that the input is always valid. This means:

input list length is correct
number of pins knocked out per roll is valid

*/

var bowlingScore = function(rolls) {

  function rollsToRounds(rolls) {
    var rounds = [];
    var round = [];
    rolls.forEach(function(v, i, a) {
      round.push(v);
      if(round.length === 2 || v === 10) {
        rounds.push(round.splice(0));
      }
    });

    if(round.length) {
      rounds.push(round.splice(0));
    } 
    return rounds;
  }
  
  function roundsToScore(rolls) {
    rolls.forEach(function(v, i, a) {
      if(v.reduce(function(p, c) { return p + c; }) === 10) {
        
      }

    //   if(v[0] === 10) {
    //     a[i] = v[0] + a[i + 1][0] + a[i + 2];
    //   } else {
    //     a[i] = v[0] + v[1]; 
    //   }
    });
  }

  return rollsToRounds(rolls);

};

console.log(bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // 0
console.log(bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9])); // 190
console.log(bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 300
console.log(bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10,1,0])); // 11
console.log(bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0])); // 12


