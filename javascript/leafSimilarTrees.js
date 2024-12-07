/**
 * https://leetcode.com/problems/leaf-similar-trees/?envType=study-plan-v2&envId=leetcode-75
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {

  // helper function to get all the leaf values
  function getLeafSequences(root) {
    let leafSequence = [];

    function dfs(node) {
      if (node === null) return;

      // below condition is if the node is leaf node, i.e. no child nodes
      if (node.left === null && node.right === null) {
        leafSequence.push(node.val);
      }

      dfs(node.left)
      dfs(node.right);
    }

    dfs(root);
    return leafSequence;
  }

  // call for root1
  const leavesOfTree1 = getLeafSequences(root1);
  const leavesOfTree2 = getLeafSequences(root2);

  return JSON.stringify(leavesOfTree1) === JSON.stringify(leavesOfTree2);

};