/**
 * 
 * https://leetcode.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */
var invertTree = function (root) {

  // recursive approach
  // if (!root) return null;

  // [root.left, root.right] = [root.right, root.left];

  // // recursive for left and right 
  // invertTree(root.left);
  // invertTree(root.right);

  // return root;

  // iterative approach using queue - BFS

  // if (!root) return null;
  // const queue = [root];

  // while (queue.length) {
  //   const node = queue.shift();
  //   [node.left, node.right] = [node.right, node.left];

  //   if (node.left) queue.push(node.left);
  //   if (node.right) queue.push(node.right);
  // }

  // return root;

  // iterative approach using stack - DFS

  if (!root) return null;
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    [node.left, node.right] = [node.right, node.left];

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return root;

};

