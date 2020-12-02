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
var inorderTraversal = function (root) {
  let ans = [];
  let dfs = (node) => {
    if (!node) return;
    if (node.left) dfs(node.left);
    ans.push(node.val);
    if (node.right) dfs(node.right);
  };
  dfs(root);
  return ans;
};
//loop
//从根到做节点入栈，依次弹出,每一个node即是left,也是root
//模拟recursive的过程
var preorderTraversal = function (root) {
  let ans = [];
  let s = [];
  let p = root;
  while (p || s.length) {
    while (p) {
      s.push(p);
      p = p.left;
    }
    let node = s.pop();
    ans.push(node.val);
    p = node.right;
  }
  return ans;
};
