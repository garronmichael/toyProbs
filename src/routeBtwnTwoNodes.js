/*

A directed graph consistst of a set of nodes and a set of edges that connect it to other nodes:

Node = {
  value:'a',
  edges: [node1, node2, ...]
}
Given an acyclic graph (a graph with no loops) like the following: (http://en.wikipedia.org/wiki/Directed_graph)

Or a graph with cycles like the following: (http://upload.wikimedia.org/wikipedia/commons/a/a2/Directed.svg)

Find whether there is a route between two nodes of the graph.

*/

//a constructor for adding a node to the tree
var Node = function(value, edges){  
  nodes[value] = {
    value: value,
    edges: edges
  };
  return nodes[value];
}

//an object containing all the nodes in the tree
var nodes = {};

//a and b are of type Node
//find out if there is a route from a to b
var getRoute = function(a,b){
  var hasRoute = false;
  var visited = [];
  function recurse(node) {
    visited.push(node.value);
    if(node.value === b.value) {
      hasRoute = true;
      return;
    } 
    if(node.edges) {
      for(var i = 0; i < node.edges.length; i++) {
        if(visited.indexOf(node.edges[i].value) < 0) {
          recurse(node.edges[i]);
        }
      }
    }
  }
  recurse(a);
  return hasRoute;
}

// Solution

var nodes = {};
var Node = (value, edges) => nodes[value] = {value: value, edges: edges};
var getRoute = function(a, b, found = []) {
  return a.edges == null ? false : a.edges.some(n => {
    if(found.indexOf(n) > -1) return false;
    found.push(n);
    return n == b || getRoute(n, b, found);
  });
}