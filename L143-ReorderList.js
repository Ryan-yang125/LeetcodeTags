/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
//O(N^2),O(N)
var reorderList = function (head) {
  if (!head || !head.next || !head.next.next) return;
  let reorder = (cur) => {
    if (!cur || !cur.next) return cur;
    let dummyHead = new ListNode();
    dummyHead.next = cur;
    while (cur.next && cur.next.next) {
      cur = cur.next;
    }
    let tail = cur.next;
    cur.next = null;
    let next = dummyHead.next.next;
    dummyHead.next.next = tail;
    tail.next = reorder(next);
    return dummyHead.next;
  };
  reorder(head);
};
//mid -> reverse -> reorder
//reverse的变形
var reorderList = function (head) {
  if (!head || !head.next) return;
  //reverse from cur and return the reversed head
  let reverse = (pre, cur) => {
    if (!cur) return pre;
    let next = cur.next;
    cur.next = pre;
    return reverse(cur, next);
  };
  //find mid
  let dummyHead = (s = q = new ListNode());
  dummyHead.next = head;
  while (q && q.next) {
    s = s.next;
    q = q.next.next;
  }
  //reverse it
  let l2 = reverse(null, s.next);
  s.next = null;
  //reorder the two lists one by one node
  let l1 = dummyHead.next;
  while (l2) {
    let next = l1.next;
    l1.next = l2;
    l1 = l2;
    l2 = next;
  }
};
