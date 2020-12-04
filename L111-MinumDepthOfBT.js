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
//recursive,dfs
var minDepth = function (root) {
  if (!root) return 0;
  if (root.left && root.right)
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  else if (!root.left && root.right) return minDepth(root.right) + 1;
  else if (!root.right && root.left) return minDepth(root.left) + 1;
  else return 1;
};
//loop,bfs
var minDepth = function (root) {
  if (!root) return 0;
  let s = [root];
  let depth = 0;
  while (s.length) {
    let size = s.length;
    while (size--) {
      let node = s.shift();
      if (node.left) s.push(node.left);
      if (node.right) s.push(node.right);
      if (!node.left && !node.right) return depth + 1;
    }
    depth++;
  }
  return depth;
};
