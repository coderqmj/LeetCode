/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

/**
 * 思路：比如[1,2,3,4]
 * 1.找到链表的中点，注意,4的中点是3，mid = Math.ceil((count+1)/2)
 * 2.第二条链表就是从中点开始反转，head2 = [4,3]
 * 3.然后交替穿插连接链表，1 => 4 => 2 => 3
 * 4.while的判断条件为  while(head2.next!==null),因为head2更短一些，连接完就没有了
 */
var reorderList = function (head) {
  let mid = findMid(head);
  let reverseMid = reverse(mid);
  while (reverseMid.next !== null) {
    let l1 = head.next;
    let l2 = reverseMid.next;
    head.next = reverseMid;
    reverseMid.next = l1;
    head = l1;
    reverseMid = l2;
  }
};

function findMid(head) {
  let curr = head;

  let count = 0;
  const map = new Map();
  while (curr) {
    count++;
    map.set(count, curr);
    curr = curr.next;
  }
  let midCount = Math.ceil((count + 1) / 2);

  return map.get(midCount);
}

function reverse(node) {
  let curr = node;
  let prev = null;
  let next = null;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
