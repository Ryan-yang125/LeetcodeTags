/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//dfs recursive
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root == p || root == q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  return !left ? right : !right ? left : root;
};
//loop and add father node manully
var lowestCommonAncestor = function (root, p, q) {
  let s = [root];
  while (s.length) {
    let node = s.shift();
    if (node.left) {
      s.push(node.left);
      node.left.parent = node;
    }
    if (node.right) {
      s.push(node.right);
      node.right.parent = node;
    }
  }
  root.parent = null;
  let set = new Set();
  while (p) {
    set.add(p);
    p = p.parent;
  }
  while (q) {
    if (set.has(q)) return q;
    q = q.parent;
  }
  return q;
};
