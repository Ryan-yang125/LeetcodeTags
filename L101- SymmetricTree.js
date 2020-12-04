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
 * @return {boolean}
 */
//recursive
//镜像的特点，需要同时处理两个节点，分类讨论
var isSymmetric = function (root) {
  let dfs = (node1, node2) => {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    return (
      node1.val == node2.val &&
      dfs(node1.left, node2.right) &&
      dfs(node1.right, node2.left)
    );
  };
  if (!root) return true;
  return dfs(root.left, root.right);
};
//loop
var isSymmetric = function (root) {};
