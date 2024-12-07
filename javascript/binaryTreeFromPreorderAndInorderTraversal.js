/**
 * 
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

  const inorderMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }

  let preorderIndex = 0;
  function helper(left, right) {

    if (left > right) return null;

    // find the root node 
    const rootVal = preorder[preorderIndex++];

    // prepare a tree node from the root value
    const root = new TreeNode(rootVal);

    // find the rootVal in the inorder map 
    const inorderIndex = inorderMap.get(rootVal);

    // divide the array into left and right based on the inorder index
    root.left = helper(left, inorderIndex - 1);
    root.right = helper(inorderIndex + 1, right);

    return root;
  }

  return helper(0, inorder.length - 1);

};

