// single-linked node
export default function singleListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// double-linked node
export default function doubleListNode(val, next, pre) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  this.pre = pre === undefined ? null : pre;
}
