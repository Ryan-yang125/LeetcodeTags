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
//maxRoot = max(left,right) + 1
//recursive
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
//loop 层序遍历的层数
var maxDepth = function (root) {
  if (!root) return 0;
  let q = [root];
  let depth = 0;
  while (q.length) {
    let size = q.length;
    while (size--) {
      let node = q.shift();
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    depth++;
  }
  return depth;
};
