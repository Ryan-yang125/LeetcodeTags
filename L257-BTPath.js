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
 * @return {string[]}
 */
//recursive
//DFS + backtracking
//找所有路径（可能和）
//非常典型的回溯
var binaryTreePaths = function (root) {
  let dfs = (node) => {
    if (!node) return;
    path.push(node.val);
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
    if (!node.left && !node.right) {
      ans.push(path.join("->"));
    }
    //回退
    path.pop();
  };
  //one possible tmp path
  let path = [];
  let ans = [];
  dfs(root);
  return ans;
};
//loop
//上面回溯的过程就是后序遍历的递归变形
//左边的路径 then 右边的路径 then回退到root
//我们也可以认为
//后序和归并排序一样
//都是分治思想的一种实现
var binaryTreePaths = function (root) {
  if (!root) return [];
  let s = [];
  let ans = [];
  let visited = new Set();
  let p = root;
  while (s.length || p) {
    while (p) {
      s.push(p);
      p = p.left;
    }
    let node = s[s.length - 1];
    //叶子节点
    if (!node.right && !node.left)
      ans.push(s.map((item) => item.val).join("->"));
    //有右节点且未被访问
    if (node.right && !visited.has(node.right)) {
      p = node.right;
      visited.add(p);
    }
    //该节点已经访问结束
    else {
      s.pop();
    }
  }
  return ans;
};
