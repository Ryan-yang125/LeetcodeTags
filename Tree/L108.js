/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
//recursion
var sortedArrayToBST = function (nums) {
  let dfs = (l, r) => {
    if (l > r) return null;
    if (l === r) return new TreeNode(nums[l]);
    let rootIndex = l + ((r - l) >> 1);
    let node = new TreeNode(nums[rootIndex]);
    node.left = dfs(l, rootIndex - 1);
    node.right = dfs(rootIndex + 1, r);
    return node;
  };
  if (!nums.length) return null;
  return dfs(0, nums.length - 1);
};
//TODO LOOP
