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
//BST的中序遍历是升序的
//换句话说，中序遍历然后前后节点是否升序
//因此我们需要每次访问结束当前节点
//保存
//再进入下一个几点
//beautiful recursion !
var isValidBST = function (root) {
  let prev = Number.MIN_SAFE_INTEGER;
  let dfs = (node) => {
    if (!node) return true;
    if (!dfs(node.left)) return false;
    if (prev >= node.val) return false;
    prev = node.val;
    return dfs(node.right);
  };
  return dfs(root);
};
//TODO add
var isValidBST = function (root) {};
