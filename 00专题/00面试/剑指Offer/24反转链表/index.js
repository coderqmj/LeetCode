/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  let pre = null;
  let next = null;
  let cur = head;
  while(cur) {
      next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
  }
  return pre;
};