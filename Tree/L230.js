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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let dfs = (node) => {
    if (!node) return;
    if (num < k) dfs(node.left);
    num++;
    if (num == k) ans = node.val;
    if (num < k) dfs(node.right);
  };
  let num = 0;
  let ans = null;
  dfs(root);
  return ans;
};
