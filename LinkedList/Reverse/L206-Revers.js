/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//loop
var reverseList = function (head) {
  if (!head) return head;
  let pre = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
//recursive forward
var reverseList = function (head) {
  let reverse = (pre, cur) => {
    if (!cur) return pre;
    let next = cur.next;
    cur.next = pre;
    return reverse(cur, next);
  };
  return reverse(null, head);
};
//recursive backward
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let res = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return res;
};
