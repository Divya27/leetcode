/**
 * 
 * https://leetcode.com/problems/balanced-binary-tree/
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
var isBalanced = function (root) {
  function checkBalance(node) {
    if (node === null) return 0;

    let leftHeight = checkBalance(node.left);
    if (leftHeight === -1) return -1;

    let rightHeight = checkBalance(node.right);
    if (rightHeight === -1) return -1;

    // difference between both the height can be at most 1 
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  }
  return checkBalance(root) !== -1;
};

