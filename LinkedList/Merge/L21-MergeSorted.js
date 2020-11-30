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
//recursive ! beautiful !?
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
//loop
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let node1 = l1,
    node2 = l2;
  let p = (dummyHead = new ListNode());
  while (node1 && node2) {
    if (node1.val < node2.val) {
      p.next = node1;
      node1 = node1.next;
      p = p.next;
    } else {
      p.next = node2;
      node2 = node2.next;
      p = p.next;
    }
  }
  if (!node1) p.next = node2;
  if (!node2) p.next = node1;
  return dummyHead.next;
};
