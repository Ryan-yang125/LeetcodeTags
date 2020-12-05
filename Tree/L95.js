/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  let back = (s, e) => {
    if (s == e) {
      return new TreeNode(s);
    }
    if (s > e) {
      return null;
    }
    for (let i = s; i <= e; i++) {
      let node = new TreeNode(i);
      node.left = back(s, i - 1);
      node.right = back(i + 1, e);
      console.log(node.val);
      return node;
    }
  };
  if (!n) return [];
  let ans = [];
  for (let i = 1; i <= n; i++) {
    let node = new TreeNode(i);
    ans.push(node);
    node.left = back(1, i - 1);
    node.right = back(i + 1, n);
  }
  return ans;
};
