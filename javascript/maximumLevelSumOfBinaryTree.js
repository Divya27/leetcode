/**
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description/
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
var maxLevelSum = function (root) {
  if (!root) return 0;
  let maxSum = -Infinity;
  let currentLevel = 0;
  let maxLevel = 0;

  let queue = [root];
  while (queue.length) {
    currentLevel += 1;
    let levelSize = queue.length;
    let currentLevelSum = 0;
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      currentLevelSum += currentNode.val;

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);

    }
    if (currentLevelSum > maxSum) {
      maxSum = currentLevelSum;
      maxLevel = currentLevel
    }
  }
  return maxLevel;

};