/**
 * @description 从尾到头打印链表
 * @date 2022-03-11
 * @method 遍历
 * @memory 42.9 MB
 * @time 60 ms
 */
var reversePrint = function(head) {
  if(head === null) return [];
  const res = [];
  while(head) {
      res.push(head.val);
      head = head.next;
  }
  return res.reverse();
};