/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//set
var detectCycle = function (head) {
  let s = new Set();
  while (head) {
    if (s.has(head)) return head;
    s.add(head);
    head = head.next;
  }
  return null;
};
//slow-quick pointer
//beautiful math!
var detectCycle = function (head) {
  let s = head,
    q = head;
  while (q && q.next) {
    s = s.next;
    q = q.next.next;
    if (q === s) {
      let p = head;
      while (p !== s) {
        p = p.next;
        s = s.next;
      }
      return p;
    }
  }
  return null;
};
