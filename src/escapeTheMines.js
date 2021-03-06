/*

A poor miner is trapped in a mine and you have to help him to get out !

Only, the mine is all dark so you have to tell him where to go.

In this kata, you will have to implement a method solve(map, miner, exit) that has to return the path the miner must take to reach the exit as an array of moves, such as : ['up', 'down', 'right', 'left']. There are 4 possible moves, up, down, left and right, no diagonal.

map is a 2-dimensional array of boolean values, representing squares. false for walls, true for open squares (where the miner can walk). It will never be larger than 5 x 5. It is laid out as an array of columns. All columns will always be the same size, though not necessarily the same size as rows (in other words, maps can be rectangular). The map will never contain any loop, so there will always be only one possible path. The map may contain dead-ends though.

miner is the position of the miner at the start, as an object made of two zero-based integer properties, x and y. For example {x:0, y:0} would be the top-left corner.

exit is the position of the exit, in the same format as miner.

Note that the miner can't go outside the map, as it is a tunnel.

Let's take a pretty basic example :

var map = [[true, false],
    [true, true]];

solve(map, {x:0,y:0}, {x:1,y:1});
// Should return ['right', 'down']

*/

function solve(map, miner, exit) {
  var recurse = function(map, miner, exit, moves, visited) {
    // if the miner is at the exit
    if(miner.x === exit.x && miner.y === exit.y) {
      // return the output
      return moves;
    // otherwise make a move
    }
      // go right
      if(miner.x < map.length - 1 && map[miner.x + 1][miner.y]) {
        map[miner.x][miner.y] = false;
        miner.x++;
        moves.push('right');
        return recurse(map, miner, exit, moves, visited);
        moves.pop();
        miner.x--;
        map[miner.x][miner.y] = true;
      }
      // go down
      if(miner.y < map[0].length - 1 && map[miner.x][miner.y + 1]) {
        map[miner.x][miner.y] = false;
        miner.y++;
        moves.push('down');
        return recurse(map, miner, exit, moves);
        moves.pop();
        miner.y--;
        map[miner.x][miner.y] = true;
      }
      // go left
      if(miner.x > 0 && map[miner.x - 1][miner.y]) {
        map[miner.x][miner.y] = false;
        miner.x--;
        moves.push('left');
        return recurse(map, miner, exit, moves, visited);
        moves.pop();
        miner.x++;
        map[miner.x][miner.y] = true;
      }
      // go up
      if(miner.y > 0 && map[miner.x][miner.y - 1]) {
        map[miner.x][miner.y] = false;
        miner.y--;
        moves.push('up');
        return recurse(map, miner, exit, moves, visited);
        moves.pop();
        miner.y++;
        map[miner.x][miner.y] = true;
      }
      return moves;
    }

  return recurse(map, miner, exit, []);
}
var map = [[true]];
console.log(solve(map, {x:0,y:0}, {x:0,y:0})); // [] returns an empty array since miner is at exit
var map = [[true, false],
           [true, true]];
console.log(solve(map, {x:0,y:0}, {x:1,y:0})); // ['right'] 
console.log(solve(map, {x:0,y:0}, {x:1,y:1})); // ['right', 'down']
var map = [[true], [true], [true], [true]];
console.log(solve(map, {x:0,y:0}, {x:3,y:0})); // ['right', 'right', 'right']
console.log(solve(map, {x:3,y:0}, {x:0,y:0})); // ['left', 'left', 'left']

// SO CONFUSING BUT! 
// 'down' === right
// 'right' === down
// 'up' === left
// 'left' === up