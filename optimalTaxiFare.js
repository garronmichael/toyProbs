/*
The student needs to get on a train that leaves from the station D kilometres away in T minutes.

She can get a taxi that drives at V1 km/h for the price of R €/km or she can walk at V2 km/h for free.

A correct solution will be a function that returns the minimum price she needs to pay the taxi driver or the string "Won't make it!".

All the inputs will be positive integers, the output has to be a string containing a number with two decimal places - or "Won't make it!" if that is the case.

It won't take her any time to get on the taxi or the train.

In non-trivial cases you need to combine walking and riding the taxi so that she makes it, but pays as little as possible.
*/

function calculateOptimalFare(distance, time, taxiSpeed, taxiRate, walkSpeed) {
  // TODO: return minimal taxi fare (e.g. "3.14") or "Won't make it!"
  var taxiSpeedPerMinute = taxiSpeed / 60;
  var walkSpeedPerMinute = walkSpeed / 60;
  var minimumSpeedNeeded = distance / time;
  if(walkSpeedPerMinute >= minimumSpeedNeeded) {
    return 0.00;
  } else if(taxiSpeedPerMinute >= minimumSpeedNeeded) {
    var maxCost = taxiRate * distance;
    var minCost;
    var walkDistance = 0;
    var taxiDistance = distance;
    var avgSpeed = taxiSpeedPerMinute;
    while(avgSpeed >= minimumSpeedNeeded) {
      walkDistance++;
      taxiDistance--;
      avgSpeed = distance / ( (taxiDistance / taxiSpeedPerMinute + walkDistance / walkSpeedPerMinute) / 2);
      minCost = taxiRate * taxiDistance;
    }
    return minCost.toFixed(2);
  } else {
    return "Won't make it!";
  }
}

// Solution

function calculateOptimalFare(D, T, V1, R, V2) {
  var tHrs = T / 60, reqAveV = D / tHrs;
  if(reqAveV > V1 && reqAveV > V2) return "Won't make it!";
  if(reqAveV <= V2) return "0.00";
  return (V1 * (D - V2 * tHrs) / (V1 - V2)).toFixed(2);
}