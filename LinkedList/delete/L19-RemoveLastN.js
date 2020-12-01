/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummyHead = (s = f = new ListNode());
  s.next = head;
  while (n--) {
    f = f.next;
  }
  while (f.next) {
    f = f.next;
    s = s.next;
  }
  s.next = s.next.next;
  return dummyHead.next;
};
