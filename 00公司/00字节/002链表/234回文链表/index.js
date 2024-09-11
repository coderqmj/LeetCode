/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let vals = [];
  while(head) {
      vals.push(head.val);
      head = head.next;
  }
  for(let i =0;i<vals.length/2;i++) {
      if(vals[i] !== vals[vals.length-i-1]) return false;
  }
  return true;
};