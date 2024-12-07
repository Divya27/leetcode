/**
 * https://leetcode.com/problems/diameter-of-binary-tree/?envType=problem-list-v2&envId=binary-tree
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  if (root == null) return 0;
  let maxDiameter = 0;

  function height(node) {
    if (!node) return 0;
    const lDepth = height(node.left);
    const rDepth = height(node.right);

    let currentDiameter = lDepth + rDepth;
    maxDiameter = Math.max(currentDiameter, maxDiameter);

    return Math.max(lDepth, rDepth) + 1;
  }
  height(root);

  return maxDiameter;

};