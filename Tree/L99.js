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
var recoverTree = function (root) {
  let dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    if (prev && node.val <= prev.val) {
      if (!first) first = prev;
      second = node;
    }
    prev = node;
    dfs(node.right);
  };
  if (!root) return;
  let prev = (first = second = null);
  dfs(root);
  [first.val, second.val] = [second.val, first.val];
};
//TODO Morris traversal
