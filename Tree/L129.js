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
var sumNumbers = function (root) {
  let dfs = (node) => {
    if (!node) return;
    path.push(node.val);
    if (!node.left && !node.right) ans.push([...path]);
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
    path.pop();
  };
  let path = [];
  let ans = [];
  dfs(root);
  let sum = 0;
  ans.forEach((path) => {
    path = path.join("");
    sum += +path;
  });
  return sum;
};
