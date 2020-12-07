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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  let dfs = (node) => {
    if (!node) return;
    if (flag) return;
    cur += node.val;
    dfs(node.left);
    dfs(node.right);
    if (!node.left && !node.right && cur === sum) {
      flag = true;
    }
    cur -= node.val;
  };
  let cur = 0;
  let flag = false;
  dfs(root);
  return flag;
};
