/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if(!headA || !headB) return null;
  const map = new Map();
  while(headA) {
    map.set(headA,1);
    headA = headA.next;
  }
  while(headB) {
    if(map.has(headB)){
      return headB;
    }
    headB = headB.next;
  }
};


var getIntersectionNode = function(headA, headB) {
  let dummy1 = headA;
  let dummy2 = headB;
  while(dummy1 !== dummy2) {
      dummy1 = dummy1 === null ? headB : dummy1.next;
      dummy2 = dummy2 === null ? headA : dummy2.next;
  }
  return dummy2;
};