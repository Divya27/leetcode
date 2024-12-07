/**
 * https://leetcode.com/problems/clone-graph/description/
 */

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  // DFS 
  // if (!node) return null;

  // // prepare map 
  // const map = new Map();

  // // recursive function
  // function dfs(node) {
  //   // check if it is there in the map
  //   if (map.has(node)) {
  //     return map.get(node);
  //   }
  //   // clone the node 
  //   const clonedNode = new Node(node.val);
  //   map.set(node, clonedNode);

  //   // iterate through all neighbours
  //   for (let neighbor of node.neighbors) {
  //     clonedNode.neighbors.push(dfs(neighbor));
  //   }
  //   return clonedNode;
  // }

  // return dfs(node);

  // BFS approach 
  if (!node) return null;
  const map = new Map();

  const queue = [node];
  map.set(node, new Node(node.val));

  while (queue.length) {
    const currentNode = queue.shift();

    for (let neighbor of currentNode.neighbors) {
      if (!map.has(neighbor)) {
        map.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }

      // add the cloned neighbor to the current node's neighbor list
      map.get(currentNode).neighbors.push(map.get(neighbor))
    }
  }
  // return the clone of starting node
  return map.get(node);

};