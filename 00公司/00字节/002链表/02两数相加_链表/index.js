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
var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode();
  let current = dummy;
  let carry = 0;
  while (l1 || l2) {
      let sum = 0;
      if(l1) {
          sum +=l1.val;
          l1 = l1.next;
      }
      if(l2) {
          sum += l2.val;
          l2 = l2.next;
      }
      sum += carry;
      current.next = new ListNode(sum%10);
      carry = sum/10 | 0;
      current = current.next;
  }
  if(carry > 0) {
      current.next = new ListNode(carry);
  }
  return dummy.next;
};