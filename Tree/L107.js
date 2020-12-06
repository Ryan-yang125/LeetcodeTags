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
var levelOrderBottom = function (root) {
  if (!root) return [];
  let s = [root];
  let ans = [];
  while (s.length) {
    let tmp = [];
    let size = s.length;
    while (size--) {
      let node = s.shift();
      tmp.push(node.val);
      if (node.left) s.push(node.left);
      if (node.right) s.push(node.right);
    }
    ans.push(tmp);
  }
  ans.reverse();
  return ans;
};
//TODO
