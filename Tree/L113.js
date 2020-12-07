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
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let dfs = (node, sum) => {
    if (!node) return;
    cur += node.val;
    path.push(node.val);
    if (!node.left && !node.right && cur === sum) {
      ans.push([...path]);
    }
    if (node.left) dfs(node.left, sum);
    if (node.right) dfs(node.right, sum);
    path.pop();
    cur -= node.val;
  };
  let ans = [];
  let path = [];
  let cur = 0;
  dfs(root, sum);
  return ans;
};
