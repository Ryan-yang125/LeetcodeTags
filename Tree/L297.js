/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return "#";
  let q = [root];
  let res = [];
  while (q.length) {
    let node = q.shift();
    if (!node) {
      res.push("#");
      continue;
    }
    res.push(node.val);
    q.push(node.left);
    q.push(node.right);
  }
  let k = res.length;
  while (res[--k] === "#") res.pop();
  return res.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === "#") return null;
  let arr = data.split(",");
  let root = new TreeNode(+arr[0]);
  let q = [root];
  for (let i = 1; i < arr.length; i++) {
    let parent = q.shift();
    if (arr[i] !== "#") {
      parent.left = new TreeNode(+arr[i]);
      q.push(parent.left);
    }
    if (arr[++i] !== "#" && i != arr.length) {
      parent.right = new TreeNode(+arr[i]);
      q.push(parent.right);
    }
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
