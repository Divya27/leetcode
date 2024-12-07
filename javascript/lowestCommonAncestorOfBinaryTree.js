/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
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
  // Base case: if the root is null or if we find either p or q
  if (root === null || root === p || root === q) {
    return root;
  }

  // Recursively search in the left and right subtrees
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  // If both left and right are non-null, this is the LCA
  if (left !== null && right !== null) {
    return root;
  }

  // If one of them is null, return the non-null side
  return left !== null ? left : right;
};