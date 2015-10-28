/*

Finish the namespace function so that it sets or gets the value at the path specified. 
The first argument should be the root object that the path belongs to. 
The 2nd argument is the path itself and the 3rd optional argument is the value to set at the path.

If a value is provided then the path will be set to that value. 
Any objects not present within the path will be created automatically in order for the path to be successfully set.


stuff = {}
namespace(stuff, 'moreStuff.name', 'the stuff')
# results in {moreStuff: {name: 'the stuff'}}
If no value is provided the the function will return the value at the path given. If the path is not valid/present then undefined will be returned.

namespace(stuff, 'moreStuff.name') # returns 'the stuff'
namesace(stuff, 'otherStuff.id') # returns undefined

*/
var root = {};
function namespace(root, path, value){

  var set = function(obj, path, value) {
    if(path.length < 1) {
      return root;
    } else if(path.length === 1) {
      obj[path[0]] = value;
    } else {
      obj[path[0]] = {};
    }
    return set(obj[path[0]], path.slice(1), value);
  }

  var get = function(obj, path) {
    if(!obj) {
      return obj;
    }
    if(path.length === 1) {
      return obj[path[0]];
    } 
    return get(obj[path[0]], path.slice(1));
  }
  return value === undefined ? get(root, path.split('.')) : set(root, path.split('.'), value);
}

console.log(namespace(root, 'moreStuff.name', 'the stuff')); // {moreStuff: {name: 'the stuff'}}
console.log(namespace(root, 'moreStuff.name')); // 'the stuff'
console.log(namespace(root, 'otherStuff.id')); // undefined

// Solution

function namespace(root, path, value){
  return path.split('.').reduce(function(prev, key, i, arr) {
    if (i == arr.length - 1)
      return value ? (prev[key] = value) : prev[key];
    return (prev[key] = {});
  }, root);
}

