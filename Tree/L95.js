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
  let dfs = (start, end) => {
    let list = [];
    if (start > end) {
      list.push(null);
      return list;
    } else if (start == end) {
      list.push(new TreeNode(start));
      return list;
    }
    let left = [],
      right = [];
    for (let i = start; i <= end; i++) {
      left = dfs(start, i - 1);
      right = dfs(i + 1, end);
      for (let leftNode of left)
        for (let rightNode of right) {
          let root = new TreeNode(i, leftNode, rightNode);
          list.push(root);
        }
    }
    return list;
  };
  if (!n) return [];
  return dfs(1, n);
};
