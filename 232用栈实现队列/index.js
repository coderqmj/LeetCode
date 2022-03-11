/**
 * Initialize your data structure here.
 * @date 2021/02/26 13:58
 * @description 两个栈实现队列
 */
var MyQueue = function() {
  this.queue = [];
  this.otherQueue = [];
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.queue.push(x);
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
  if(this.otherQueue.length) return this.otherQueue.pop();  // 如果另外一个数组中存在元素，则说明上次倒腾过的元素没有出队列完，则继续使用，直到使用完在去倒腾queue数组的元素
  
  // 倒腾元素，将queue元素反着放入otherQueue中，然后返回otherQueue中最后一个元素
  while(this.queue.length) {
      this.otherQueue.push(this.queue.pop())
  }
  return this.otherQueue.pop();
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  if(this.otherQueue.length) return this.otherQueue[this.otherQueue.length-1];
  return this.queue[0]
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  if(this.queue.length || this.otherQueue.length) return false;
  return true;
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/