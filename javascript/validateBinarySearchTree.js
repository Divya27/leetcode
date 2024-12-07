/**
 * https://leetcode.com/problems/validate-binary-search-tree/
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {

  // recursive dfs
  // the value of node should be > than lower bound and < than upper bound
  function helper(node, low, high) {

    // base case, no further node - valid 
    if (node === null) return true;

    // check if current node's value is within the range
    if (node.val <= low || node.val >= high) return false;

    // recursively check left and right sub trees with updated ranges 
    // update the upper bound for left sub tree and lower bound for right sub tree to node's val
    return helper(node.left, low, node.val) && helper(node.right, node.val, high);
  };

  return helper(root, -Infinity, Infinity);
};