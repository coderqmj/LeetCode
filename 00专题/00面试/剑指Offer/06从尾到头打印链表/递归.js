/**
 * @description 从尾到头打印链表
 * @date 2022-03-11
 * @method 递归
 * @memory 48.6 MB
 * @time 428 ms
 */
const reversePrint = function(head) {
  return head === null ? [] : reversePrint(head.next).concat(head.val);
};