/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prve = null;
  let next = null;
  let current = head;
  while(current !== null) {
    next = current.next;
    current.next = prve;
    prve = current;
    current = next;
  }
  return prve;
};