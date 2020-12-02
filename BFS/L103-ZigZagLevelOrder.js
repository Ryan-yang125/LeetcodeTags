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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let ans = [];
  let q = [];
  q.push(root);
  let level = 1;
  while (q.length) {
    let size = q.length;
    let tmp = [];
    while (size--) {
      let node = q.shift();
      tmp.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    if (level % 2 == 0) tmp.reverse();
    ans.push(tmp);
    level++;
  }
  return ans;
};
