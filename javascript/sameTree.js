/**
 * 
 * https://leetcode.com/problems/same-tree/description/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // recursive 

  // both bull, so same 
  // if (p == null && q == null) return true;

  // // anyone is null, false 
  // if (p === null || q === null) return false;

  // if (p.val !== q.val) return false;

  // return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

  // Iterative approach using stack, each elem will have pair having elem from p and q resp.
  const stack = [[p, q]];
  while (stack.length) {
    const [nodep, nodeq] = stack.pop();
    if (nodep == null && nodeq == null) continue;
    if (nodep == null || nodeq == null) return false;
    if (nodep.val !== nodeq.val) return false;

    stack.push([nodep.left, nodeq.left]);
    stack.push([nodep.right, nodeq.right]);
  }
  return true
};

