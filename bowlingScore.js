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

  function rollsToFrameScore(rolls) {
    var frameScores = [];
    var frame = 0;
    var ball = 0;

    for(var i = 0; i < rolls.length; i++) {
      // if we are have calculated the 10th frame
      if(frame > 9) {
        // break the loop
        break;
      }
      var roll = rolls[i];
      frameScores[frame] = frameScores[frame] || 0;
      // add the roll to the current frame;
      frameScores[frame] += roll;
      // add a ball
      ball++;
      // if roll is a strike)
      if(roll === 10) {
        // add the next two rolls to the current frame
        frameScores[frame] += (rolls[i + 1] || 0) + (rolls[i + 2] || 0);
        // go the next frame
        frame++;
        // reset ball
        ball = 0;
      // if roll is a spare 
      } else if(frameScores[frame] === 10 && roll !== 10) {
        // add the next roll to the current frame
        frameScores[frame] += (rolls[i + 1] || 0);
        // go to the next frame
        frame++;
        // reset ball
        ball = 0;
      // otherwise if ball === 2
      } else if(ball === 2) {
        // go to the next frame;
        frame++;
        // reset ball
        ball = 0;
      }
    }
    return frameScores;
  }

  return rollsToFrameScore(rolls).reduce(function(p, c){return p + c});

};

console.log(bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // 0
console.log(bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9])); // 190
console.log(bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 300
console.log(bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10,1,0])); // 11
console.log(bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0])); // 12
console.log(bowlingScore([ 10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10 ])); // 200


