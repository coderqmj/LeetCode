/**
 * @description 两个栈实现队列
 * @url https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 * @date 2022-03-10
 */

// 版本一：倒腾元素
var CQueue = function() {
  this.queueOne = [];
  this.queueTwo = [];
};

CQueue.prototype.appendTail = function(value) {
  this.queueOne.push(value);
};

CQueue.prototype.deleteHead = function() {
  if(this.queueTwo.length) return this.queueTwo.pop();
  while(this.queueOne.length) {
      this.queueTwo.push(this.queueOne.pop())
  }
  const res = this.queueTwo.pop();
  return res || -1;
};
