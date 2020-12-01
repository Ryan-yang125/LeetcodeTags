/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummyHead = (pre = new ListNode());
  dummyHead.next = head;
  while (head) {
    if (head.val === val) {
      pre.next = head.next;
      head = head.next;
    } else {
      head = head.next;
      pre = pre.next;
    }
  }
  return dummyHead.next;
};
