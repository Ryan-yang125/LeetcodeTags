/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
//loop1
var connect = function (root) {
  if (!root) return null;
  let q = [root];
  while (q.length) {
    let size = q.length;
    while (size--) {
      let node = q.shift();
      let next = size ? q[0] : null;
      node.next = next;
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }
  return root;
};
//TODO loop2
