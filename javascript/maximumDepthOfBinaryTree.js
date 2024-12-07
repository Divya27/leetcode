/**
 * 
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
var maxDepth = function (root) {

  // *** Recursive approach ***

  // if (root === null) return 0;
  // const lDepth = maxDepth(root.left);
  // const rDepth = maxDepth(root.right);

  // return (Math.max(lDepth, rDepth)) + 1;

  // *** iterative approach using level order traversal ***
  if (root == null) return 0;
  let depth = 0;
  let queue = [root];

  while (queue.length) {
    let levelSize = queue.length;
    depth++;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return depth;

};
