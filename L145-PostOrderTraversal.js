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
//两步:
//左节点全部入栈
//检查是否有(非空&&未访问)右节点
var postorderTraversal = function (root) {
  if (!root) return [];
  let ans = [];
  let s = [];
  let set = new Set();
  let p = root;
  while (s.length || p) {
    while (p) {
      s.push(p);
      p = p.left;
    }
    let node = s[s.length - 1];
    if (node.right && !set.has(node.right)) {
      p = node.right;
      set.add(p);
    } else {
      ans.push(node.val);
      s.pop();
    }
  }
  return ans;
};
