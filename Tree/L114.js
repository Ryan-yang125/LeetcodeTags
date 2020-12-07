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
 * @return {void} Do not return anything, modify root in-place instead.
 */
//recursive 1
var flatten = function (root) {
  if (!root) return;
  let dfs = (node) => {
    if (!node) return null;
    let right = node.right;
    let left = (tail = dfs(node.left));
    if (tail) {
      while (tail.right) tail = tail.right;
      tail.right = right;
      node.right = left;
    }
    return node;
  };
  dfs(root);
};
//recursive 2
var flatten = function (root) {
  let dfs = (node) => {
    if (!node) return;
    dfs(node.right);
    dfs(node.left);
    node.right = prev;
    node.left = null;
    prev = node;
  };
  let prev = null;
  dfs(root);
};
