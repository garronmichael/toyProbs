/*

The purpose of this kata is to implement the undoRedo function.

This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:

set(key, value) Assigns the value to the key. If the key does not exist, creates it.

get(key) Returns the value associated to the key.

del(key) removes the key from the object.

undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.

redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.

After set() or del() are called, there is nothing to redo.

All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.

*/

function undoRedo(object) {
  var states = [];
  var curState = -1;

  var addState = function(object) {
    var newState = {};
    for(key in object) {
      newState[key] = object[key];
    }
    states[++curState] = newState;
  };

  addState(object);

  var changeState = function(stateIdx) {
    for(key in object) {
      delete object[key];
    }
    for(key in states[stateIdx]){
      object[key] = states[stateIdx][key];
    }
    curState = stateIdx;
  };

  return {
    set: function(key, value) {
      object[key] = value;
      addState(object);
    },
    get: function(key) {
      return object[key];
    },
    del: function(key) {
      delete object[key];
      addState(object);
    },
    undo: function() {
      if(curState < 1) {
        throw 'Nothing left to undo';
      } else {
        changeState(curState - 1);
      }
    },
    redo: function() {
      if(curState + 1 > states.length - 1) {
        throw 'Nothing left to redo';
      } else {
        changeState(curState + 1);
      }
    }
  };
}

var obj = undoRedo({x:5, y:6});

console.log('should be 6', obj.get('y'));
obj.del('y');
console.log('should be undefined', obj.get('y'));
console.log('should be 5', obj.get('x'));
obj.set('y', 66);
console.log('should be 66', obj.get('y'));
console.log('should be 5', obj.get('x'));
obj.undo();
console.log('should be undefined', obj.get('y'));
console.log('should be 5', obj.get('x'));


// Solution

function undoRedo(obj) {
  var commands = []
  var index = -1
  
  function add(cmd) {
    commands.splice(index + 1, commands.length - index)
    commands.push(cmd)
    index = commands.length - 1
  }
  
  return {
    get: function(key) {
      return obj[key]
    },
    set: function(key, value) {
      var prev = obj[key]
      var cmd = {
        exec: function() { obj[key] = value },
        undo: function() { obj[key] = prev }
      }
      
      add(cmd)
      cmd.exec()
    },
    del: function(key) {
      var prev = obj[key]
      var cmd = {
        exec: function() { delete obj[key] },
        undo: function() { obj[key] = prev }
      }
      
      add(cmd)
      cmd.exec()
    },
    undo: function() {
      var cmd = commands[index]
      if (cmd === void 0) throw new Error()
      
      cmd.undo()
      index--
    },
    redo: function() {
      var cmd = commands[index + 1]
      if (cmd === void 0) throw new Error()
      
      cmd.exec()
      index++
    }
  }
}