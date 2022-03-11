/**
 * @description 包含min函数的栈
 * @date 2022-03-11
 */
 var MinStack = function() {
  this.stack = [];
  this.minNum = [Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  this.minNum.push(Math.min(this.minNum[this.minNum.length], x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.minNum.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length -1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
  return this.minNum[this.minNum.length-1]
};
