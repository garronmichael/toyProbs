/* 

Welcome Warrior! Let's play a game!

You've gotten challenged by a lot of kata, now it's time for you to challenge the kata!

Inside a room, there is a table with a pile of cakes. One of these cakes is filled with poison. Every turn, we will take cakes from this pile and eat them, leaving the last one to be the poisonous cake. Whoever eats the poisonous cake will die. The poisonous cake is clearly marked, so you do not have to guess. Rather you need to rely on your logic to save you.

The rules are simple:

Do not eat the last cake. It's obivious that poisonous cake will be the last to be eaten, so, DON'T EAT THE LAST CAKE. Try to make your opponent eat it.
When it is your turn, you can only take one, two or three cakes. The same rules apply to your opponent on there turn. You cannot skip your move, so choose wisely how many cakes to eat. Both opponents will be able to see how many cakes the other eats on each turn.
You cannot copy your opponent's previous move, likewise they cannot copy yours. If your opponent takes one cake, next move you can only choose between two or three. If you take three cakes, your opponent can only choose one or two. This doesn't effect the first move, only to subsequent.
If one of the players has no valid moves (e.g one cake left and previous move was one cake), that player will lose his turn and be skipped. Then the other player will be forced to eat the last cake. This is the ONLY case of turn skipping.
You can choose whether or not to go first. This decision is key to victory, so don't hurry, choose wisely!
Task of this kata:

To solve this kata, you should write class called Player. This class has one constructor and two other functions:

function Player(cakes){
  // called at the beginning of each game. Parameter: a number of cakes on table
}
Player.prototype.firstmove = function(cakes){
  // called after constructor. Must return true if you want to move first, false is you want to move after your opponent
  // Parameter: number of cakes on table left (same as in constructor)
}
Player.prototype.move = function(cakes, last){
  // called before each of your moves. First parameter: number of cakes left on table. Second parameter: amount of cakes took by your opponent last move. Must return 1, 2 or 3 depending of how much cakes you want to take.
}
Each test is a different game and different instance of the Player class. You should not worry about calling functions, you should only watch the number of cakes on table and decide on every move how many to take, and decide who moves first.

Write your Player class and beat your opponent! You must figure out a strategy that can guarantee you a victory.

Example:

// Constructor (your Captain Obivious)
function Player(cakes){}
// Decide who move first - player or opponent (return true if player)
Player.prototype.firstmove = function(cakes){
  // I wish to move first
  return true;
}
// Decide your next move (return 1, 2 or 3)
Player.prototype.move = function(cakes, last){
  // I'm not greedy
  return last == 1 ? 2 : 1;
}
Example of game:

12 cakes on the table. You decided to move first.

You ate 1 cake, 11 cakes left

Opponent ate 3 cakes, 8 cakes left

You ate 2 cakes, 6 cakes left

Opponent ate 1 cake, 5 cakes left

You ate 3 cakes, 2 cakes left

Opponent has no winning choice. If he eats 2 cakes, he will lose. If he eats 1 cake, you will be left in stalemate situation, and he will again eat 1 cake and lose.

You win.

*/

// Constructor (your Captain Obivious)
function Player(){}
// Decide who move first - player or opponent (true if player)
Player.prototype.firstmove = function(cakes){
  // I wish to move first
  if(cakes <= 9 && cakes > 2 && cakes !== 6 || cakes % 3 === 0 && cakes !== 6 && cakes !== 15) {
    return true;
  } else {
    return false;
  }
}
// Decide your next move
Player.prototype.move = function(cakes, last){
  // I'm not greedy
  if(cakes === 5) {
    return 3;
  } else if (cakes === 4) {
    return 3;
  } else if (cakes === 3) {
    return 1;
  } else if (cakes === 7) {
    return last === 1 ? 2 : 1;
  } else if (cakes === 9) {
    return 3;
  } else {
    return last === 3 ? 2: 3;
  }
}


// Example function, real one has much better AI ...
function Game(n, debug){
  function sample(arr){
    return arr[Math.floor(arr.length*Math.random())];
  }
  function plural(x){
    if(x == 1) return x + " cake";
    else return x + " cakes";
  }
  var cakes = n|0;
  if(cakes <= 0) throw new RangeError("At least one cake required");
  var player = new Player(cakes);
  var first = player.firstmove(cakes);
  var last = 0;
  if(debug) console.log(plural(cakes) + " on the table. You decided to move " + (first ? "first": "last"));
  // now, let's game begin
  for(;;){
    // my move
    if(!first){
      var allow = [];
      for(var i = 1; i <= 3; i++)
        if(cakes >= i && i !== last)
          allow.push(i);
      if(!allow.length) throw "Game over: stalemate";
      last = sample(allow);
      cakes -= last;
      if(cakes == 0){
        if(debug) console.log("Yum! I ate the last cake, you win!");
        return true;
      }
      if(debug) console.log("I ate "+plural(last)+", "+plural(cakes)+" still left"); 
    } else first = false;
    // your move
    if (cakes == 1 && last == 1){
      if(debug) console.log("I lead you to stalemate, so you are winner");
      return true;
    }
    var move = player.move(cakes, last);
    if (move > 4) throw "Error: You are so greedy! Don't try to eat more than 3 cakes.";
    if ([1,2,3].indexOf(move) === -1) throw "Error: Illegal move (must be 1, 2 or 3, type Number)";
    if (move == last) throw "Error: You cannot eat the same quantity of cakes as you opponent on previous move"; 
    if (move > cakes) throw "Error: Don't try to eat more cakes that left on table";
    if (move == cakes) throw "Game over: You ate the last cake!";
    cakes -= move;
    last = move;
    if(debug) console.log("You ate "+plural(move)+", "+plural(cakes)+" still left"); 
  }
}

console.log(Game(8, true));
console.log(Game(9, true));   
console.log(Game(10, true));   
console.log(Game(11, true));      
console.log(Game(12, true));
console.log(Game(12, true));         