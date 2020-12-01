/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let sum = 0;
  let head = (p = new ListNode());
  while (l1 || l2) {
    sum = Math.floor(sum / 10);
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    p.next = new ListNode(sum % 10);
    p = p.next;
  }
  if (Math.floor(sum / 10)) p.next = new ListNode(1);
  return head.next;
};
