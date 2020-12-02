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
 * @return {number[]}
 */
//recursive
var preorderTraversal = function (root) {
  let ans = [];
  let dfs = (node) => {
    if (!node) return;
    ans.push(node.val);
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  };
  dfs(root);
  return ans;
};
//loop with stack
//queue(stack) == stack(dfs)
var preorderTraversal = function (root) {
  if (!root) return [];
  let ans = [];
  let s = [root];
  while (s.length) {
    let tail = s.pop();
    ans.push(tail.val);
    if (tail.right) s.push(tail.right);
    if (tail.left) s.push(tail.left);
  }
  return ans;
};
