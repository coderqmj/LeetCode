/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let curr = head;
  let map = new Map();
  while (curr) {
    if(map.has(curr)) {
      return true
    }else {
      map.set(curr, curr.val)
    }
    curr = curr.next;
  }
  return false
};