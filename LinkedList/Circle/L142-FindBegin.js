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
var detectCycle = function (head) {};
