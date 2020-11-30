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
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let p = (dummyHead = new ListNode());
  p.next = head;
  let node1, node2;
  while ((node1 = p.next) && (node2 = p.next.next)) {
    node1.next = node2.next;
    node2.next = node1;
    p.next = node2;
    p = node1;
  }
  return dummyHead.next;
};
//recursive ! beautiful !
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let node1 = head,
    node2 = head.next;
  node1.next = swapPairs(node2.next);
  node2.next = node1;
  return node2;
};
