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
//dfs
var countNodes = function (root) {
  let dfs = (node) => {
    if (!node) return;
    num++;
    dfs(node.left);
    dfs(node.right);
  };
  let num = 0;
  dfs(root);
  return num;
};
//bfs
var countNodes = function (root) {
  if (!root) return 0;
  let hl = (hr = 0);
  let p = (q = root);
  while (p) {
    p = p.left;
    hl++;
  }
  while (q) {
    q = q.right;
    hr++;
  }
  if (hl == hr) return Math.pow(2, hl) - 1;
  return countNodes(root.left) + countNodes(root.right) + 1;
};
