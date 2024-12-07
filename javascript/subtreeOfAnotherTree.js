/**
 * https://leetcode.com/problems/subtree-of-another-tree/
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root) return false;

  // check if both are same tree 
  if (isSameTree(root, subRoot)) return true

  // check if t is same as left subtree of s or right subtree of s
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var isSameTree = function (s, t) {
  // both same 
  if (!s && !t) return true;

  // if one either of them is null
  if (!s || !t) return false;

  // if value does not match
  if (s.val !== t.val) return false;

  // check for left and right sub tree
  return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
}
