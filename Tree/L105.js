/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
//思路简单
//难点在于数组下标的计算
var buildTree = function (preorder, inorder) {
  let dfs = (preIndex, inStart, inEnd) => {
    if (inStart > inEnd) return null;
    if (inStart === inEnd) return new TreeNode(preorder[preIndex]);
    let i = inStart;
    for (; i <= inEnd; i++) {
      if (inorder[i] === preorder[preIndex]) break;
    }
    let node = new TreeNode(preorder[preIndex]);
    node.left = dfs(preIndex + 1, inStart, i - 1);
    node.right = dfs(preIndex + i - inStart + 1, i + 1, inEnd);
    return node;
  };
  if (!preorder.length) return null;
  return dfs(0, 0, inorder.length - 1);
};
