/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let dfs = (postRoot, inLeft, inRight) => {
    if (inLeft > inRight) return null;
    if (inLeft === inRight) return new TreeNode(postorder[postRoot]);
    let inRoot = inLeft;
    for (; inRoot <= inRight; inRoot++) {
      if (inorder[inRoot] === postorder[postRoot]) break;
    }
    let node = new TreeNode(inorder[inRoot]);
    node.left = dfs(postRoot - inRight + inRoot - 1, inLeft, inRoot - 1);
    node.right = dfs(postRoot - 1, inRoot + 1, inRight);
    return node;
  };
  if (!inorder.length) return null;
  return dfs(postorder.length - 1, 0, inorder.length - 1);
};
