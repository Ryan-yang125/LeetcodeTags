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
var rightSideView = function (root) {
  if (!root) return [];
  let ans = [];
  let q = [];
  q.push(root);
  while (q.length) {
    let size = q.length;
    let right;
    while (size--) {
      let node = q.shift();
      if (!size) right = node.val;
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    ans.push(right);
  }
  return ans;
};
