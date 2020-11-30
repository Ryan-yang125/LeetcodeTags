/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//Use set
var hasCycle = function (head) {
  let s = new Set();
  while (head) {
    if (s.has(head)) return true;
    s.add(head);
    head = head.next;
  }
  return false;
};
//Use quick-slow pointer
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let s = head,
    q = head.next;
  while (q && q.next) {
    if (s === q) return true;
    s = s.next;
    q = q.next.next;
  }
  return false;
};
