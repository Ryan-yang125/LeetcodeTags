/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//In O(N) time , O(1) space
var isPalindrome = function (head) {
  if (!head || !head.next) return true;
  //reverse
  let reverse = (pre, cur) => {
    if (!cur) return pre;
    let next = cur.next;
    cur.next = pre;
    return reverse(cur, next);
  };
  let slow = (fast = new ListNode());
  slow.next = head;
  //find mide node;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  //cut off linked list
  let newstart = slow.next;
  slow.next = null;
  //reverse from mid node
  newstart = reverse(null, newstart);
  //compare dummyHead.next and pre
  for (let p = head; newstart !== null; p = p.next, newstart = newstart.next) {
    if (p.val !== newstart.val) return false;
  }
  return true;
};
