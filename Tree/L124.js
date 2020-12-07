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
//这玩意儿和最长直径的区别不就是一个有权一个无权吗？
//甚至节点相比路径处理起来更直观
var maxPathSum = function (root) {
  let dfs = (node) => {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    let rootSum = Math.max(left, right) + node.val;
    left = left > 0 ? left : 0;
    right = right > 0 ? right : 0;
    let childSum = left + right + node.val;
    if (childSum > ans) ans = childSum;
    return rootSum > 0 ? rootSum : 0;
  };
  let ans = Number.MIN_SAFE_INTEGER;
  dfs(root);
  return ans;
};
//loop
//和后序也很像，自底向上
//从叶子节点往上
//麻烦的是如何区分左右子树
//这里用的是哈希表
var maxPathSum = function (root) {
  if (!root) return 0;
  let max = Number.MIN_SAFE_INTEGER;
  let s = [];
  let p = root;
  let visited = new Set();
  let map = new Map();
  map.set(null, 0);
  while (s.length || p) {
    while (p) {
      s.push(p);
      p = p.left;
    }
    let node = s[s.length - 1];
    if (node.right && !visited.has(node.right)) {
      p = node.right;
      visited.add(p);
    } else {
      let left = map.get(node.left);
      let right = map.get(node.right);
      left = left > 0 ? left : 0;
      right = right > 0 ? right : 0;
      let cur = left + right + node.val;
      if (cur > max) max = cur;
      map.set(node, Math.max(left, right) + node.val);
      s.pop();
    }
  }
  return max;
};
