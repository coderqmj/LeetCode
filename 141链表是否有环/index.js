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
 * 思路：遍历链表，每一个节点使用map存起来，如果map.has(curr)，说明之前存该节点，则有环
 */

// 方法一：快慢指针
var hasCycle = function(head) {
    if(!head) return false;
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
      if(fast === slow) return true
    }
    return false;
};

// 方法二：hashMap
var hasCycle = function(head) {
  let map = new Map();
  while(head) {
    if(map.has(head)){
      return true;
    }else {
      map.set(head, 1);
    }
    head = head.next;
  }
  return false;
};