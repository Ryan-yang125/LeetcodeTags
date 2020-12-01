/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
//recursive
//from top to bottom
//把单个有序节点看作一个number，这就是归并排序
var mergeKLists = function (lists) {
  //mergeTwo in recurse
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
  const merge = (lists, l, r) => {
    if (r - l < 0) return null;
    if (r - l === 0) return lists[r];
    let mid = Math.floor(l + (r - l) / 2);
    return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r));
  };
  return merge(lists, 0, lists.length - 1);
};
//loop
//from bottom to top
var mergeLists = function (lists) {
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
  if (!lists || !lists.length) return null;
  let dummyHead = [];
  for (let i = 0; i < lists.length; i++) {
    let node = new ListNode();
    node.next = lists[i];
    dummyHead.push(node);
  }
  for (let size = 1; size < dummyHead.length; size += size)
    for (let i = 0; i + size < dummyHead.length; i += 2 * size) {
      dummyHead[i].next = mergeTwoLists(
        dummyHead[i].next,
        dummyHead[i + size].next
      );
    }
  return dummyHead[0].next;
};
