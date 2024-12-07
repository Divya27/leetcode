/**
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// can be done by bfs and dfs both 
// bfs -- level order traversal - queue
// dfs -- preorder traversal - recursion
var serialize = function (root) {
  let result = [];
  function preorder(node) {
    if (node === null) {
      result.push("null");
      return;
    }
    result.push(node.val.toString());
    preorder(node.left);
    preorder(node.right);
  }

  preorder(root);
  // return serializes string
  return result.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let values = data.split(',');
  let index = 0;
  // build tree 
  function buildTree() {
    if (values[index] === "null") {
      // no children - nothing
      index++;
      return null;
    }
    const node = new TreeNode(parseInt(values[index]));
    index++;
    node.left = buildTree();
    node.right = buildTree();
    return node;
  }
  return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
