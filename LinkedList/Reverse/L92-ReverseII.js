/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
//loop
var reverseBetween = function (head, m, n) {
  if (!head || !head.next || m >= n) return head;
  //哨兵避免头节点单独处理
  let dummyHead = new ListNode();
  let p = dummyHead;
  let pre, cur, front, tail;
  p.next = head;
  for (let i = 1; i < m; i++) {
    p = p.next;
  }
  front = p;
  cur = tail = p.next;
  pre = null;
  for (let i = m; i <= n; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  front.next = pre;
  tail.next = cur;
  return dummyHead.next;
};
