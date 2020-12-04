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
//最直接的思路
var diameterOfBinaryTree = function (root) {
  let getHeight = (node) => {
    if (!node) return -1;
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  };
  let dfs = (node) => {
    if (!node) return 0;
    let sumOfRoot = getHeight(node.left) + getHeight(node.right) + 2;
    let sumOfChild = Math.max(dfs(node.left), dfs(node.right));
    return Math.max(sumOfRoot, sumOfChild);
  };
  if (!root) return 0;
  return dfs(root);
};
//优化
var diameterOfBinaryTree = function (root) {
  let dfs = (node) => {
    if (!node) return 0;
    let left = node.left ? dfs(node.left) + 1 : 0;
    let right = node.right ? dfs(node.right) + 1 : 0;
    let cur = left + right;
    if (cur > max) max = cur;
    return Math.max(left, right);
  };
  let max = 0;
  if (!root) return max;
  dfs(root);
  return max;
};
