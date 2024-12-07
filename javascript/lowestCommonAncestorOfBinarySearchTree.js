/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // iterative approach 
  let current = root;
  while (current !== null) {
    if (p.val < current.val && q.val < current.val) {
      // move to left subtree
      current = current.left;
    } else if (p.val > current.val && q.val > current.val) {
      // move to right subtree
      current = current.right;
    } else {
      // if either one of p or q is same as current or if one is larger and other is smaller than current node
      return current;
    }
  }
  return null;
};

