/*
Implement a Least Recently Used (LRU) cache. An LRU cache is a key-value store that contains a set capacity for the number of elements it holds, which is stored in a property. The size should also be a property. When trying to add a new key-value pair, if cache.size == cache.capacity, the Least Recently Used key is removed.

Hint: You will will need to use the Object.defineProperty facility

Example Behavior:

var store = new LRUCache(3 // Size of the cache 
                        , {a: 1}); // Optional initial values for cache
store.size; // should be 1
store.capacity; // should be 3
store.a; // should be 1;
store.cache('b', 2)['b']; // should be 2
store.a = 5;
store.a; // should be 5
store.cache('c', 3).cache('d', 4).b; // should be undefined, since 'b' was removed because it was the least recently used
store.delete('d');
store.d ; // should be undefined, since 'd' was deleted
store.size ; // should be 2
store.cache('c', 4); 
store.c; // should be 4
store.capacity = 1; // should resize the store to have just one element
Object.keys(store); // should be ['c']
Full API Specification:

The user should be able to make a new cache object with new LRUCache(n), where n is the cache's (initial) capacity
The constructor should be able to take a javascript object as an optional second parameter, which will be copied and put into the cache
Items can be added to the cache using a method called cache
cache takes two arguments, a key and a value
The new key should be added as a property to the cache
The new property should be enumerable
It should be possible to reassign the new property
Caching an already existing property should update its value
The cache method should return the cache itself, so the method can be chained (ie, the builder pattern)
The cache method itself should not be enumerable, writable, nor configurable
Items can be deleted from the cache using a method called delete
This method should not be enumerable, writable, nor configurable
This method should have the same return values as the delete builtin
The number of elements stored in the cache should be accessible via the size property
This property should not be enumerable, writable nor configurable
The capacity should be accessible by via the capacity property
Making the capacity smaller should trigger the cache to delete the least recently used items until the size of the cache is smaller than or equal to the capacity
This property should not be enumerable
The size property should never acceed the capacity property of a cache
An item in the cache is used every time its value is read or assigned, or it is cached using the cache method

*/

function LRUCache(capacity, init) {
  var storage = [];

  for(key in init) {
    this[key] = init[key];
    storage.push([key, init[key]]);
  }

  this.capacity = capacity;

  this.cache = function(key, value) {
    if(this[key]) {
      this[key] = value;
      storage.forEach(function(v, i, a) {
        if(v[0] === key) {
          a.splice(i, 1);
          a.push([key, value]);
        }
      });
    } else if(storage.length < this.capacity) {
      this[key] = value;
      storage.push([key, value]);
      this.size++;
    } else {
      var LRU = storage.shift();
      delete this[LRU[0]];
      this[key] = value;
      storage.push([key, value]);
    }
    return this;
  };

  this.size = storage.length;
}


console.log((function() {
  var LRU = new LRUCache(3, {'a': 1});
  console.log('capacity', LRU.capacity) 
  console.log('size', LRU.size);
  console.log(LRU.cache('a', 1))
  console.log(LRU.cache('b', 2))
  LRU.a = 5;
  console.log(LRU.a);
  console.log('watchFnOutside', LRU.watch)

})())

// Solution

function LRUCache(capacity, init) {
  var self = this, counter = 0, access = {}, values = {};
  
  function get(key) { return function() { access[key] = ++counter; return values[key]; } }
  function set(key) { return function(value) { access[key] = ++counter; values[key] = value; }}
  function remove(key) { delete values[key]; delete access[key]; return delete self[key]; }
  function findOldest() { return Object.keys(self).sort(function(a,b) { return access[a] > access[b]; })[0]; }
  function updateCapacity(c) { capacity = c; while (self.size > capacity) self.delete(findOldest()); }
  function cache(key, value) {
    if (self.size >= capacity) remove(findOldest());
    values[key] = value; access[key] = ++counter;
    Object.defineProperty(self, key, { enumerable : true, configurable: true, get : get(key), set : set(key) });
    return self;
  }
  
  Object.defineProperty(this, "size", { get : function() { return Object.keys(self).length; }});
  Object.defineProperty(this, "delete", { value : remove});
  Object.defineProperty(this, "capacity", { get : function() { return capacity; }, set : updateCapacity });
  Object.defineProperty(this, "cache", { value : cache });
  
  Object.keys(init||{}).forEach(function(k) { self.cache(k, init[k]); });
}










