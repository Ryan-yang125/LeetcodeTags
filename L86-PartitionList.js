/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) return head;
  let small = new ListNode(),
    great = new ListNode();
  let p1 = small;
  let p2 = great;
  while (head) {
    if (head.val < x) {
      p1.next = head;
      p1 = p1.next;
    } else {
      p2.next = head;
      p2 = p2.next;
    }
    head = head.next;
  }
  p1.next = great.next;
  p2.next = null;
  return small.next;
};
