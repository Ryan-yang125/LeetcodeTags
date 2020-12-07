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
//loop 1
var connect = function (root) {
  if (!root) return root;
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
//loop 2
var connect = function (root) {
  if (!root) return null;
  let prev = root;
  let cur = null;
  while (prev.left) {
    cur = prev; //the first node in every level
    while (cur) {
      cur.left.next = cur.right;
      if (cur.next) cur.right.next = cur.next.left;
      cur = cur.next;
    }
    prev = prev.left;
  }
  return root;
};
//recursion
var connect = function (root) {
  var connect = function (root) {
    if (!root) return null;
    if (root.left) {
      root.left.next = root.right;
      root.right.next = root.next ? root.next.left : null;
      connect(root.left);
      connect(root.right);
    }
    return root;
  };
};
