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
var postorderTraversal = function (root) {
  let ans = [];
  let dfs = (node) => {
    if (!node) return;
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
    ans.push(node.val);
  };
  dfs(root);
  return ans;
};
//loop
//TODO
var postorderTraversal = function (root) {
  let ans = [];
  let s = [];
  let p = root;
  while (s.length) {
    while (p.left) {
      s.push(p);
      p = p.left;
    }
    while (p.right) {
      s.push(p);
      p = p.right;
    }
    ans.push(p.val);
  }
};
