/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let curr = head;
  let len = 0
  while(curr){
      curr = curr.next;
      len++;
  }
  
  let dummy = head;
  for(let i=1;i<len-n;i++) {
      dummy = dummy.next;
  }
  if(len===n){
      head = head.next;;
  }else {
      dummy.next = dummy.next.next;
  }
  return head;
};