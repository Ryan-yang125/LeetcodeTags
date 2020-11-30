/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
//recursive
var reverseKGroup = function (head, k) {
  let pre = null,
    cur = head,
    p = head;
  //check if k enough
  for (let i = 0; i < k; i++) {
    if (!p) return head;
    p = p.next;
  }
  //reverse k from cur
  for (let i = 0; i < k; i++) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  head.next = reverseKGroup(cur, k);
  //pre is the head of current list after reverse
  //this linked the lists spliced by k
  return pre;
};
//loop
var reverseKGroup = function (head, k) {};
