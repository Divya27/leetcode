/**
 * https://leetcode.com/problems/min-stack/solutions/5063696/easiest-javascript-solution/?envType=study-plan-v2&envId=top-interview-150
 */


// approach 1 -- using 2 stacks
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {

  // push the value to stack 
  this.stack.push(val);

  // check and push the min value in minStack
  if (!this.minStack.length || val <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(val);
  }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {

  const topElement = this.stack.pop();

  // if this top element is also the minimun, then pop from minStack as well
  if (topElement === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }

};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};


// approach 2 -- using single stack and maintaining min variable (pending to be executed)
class MinStack {
  constructor() {
    this.stack = [];
    this.min = null;
  }
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {

  // push the difference onto the stack
  if (!this.stack.length) {
    this.stack.push(0);
    this.min = val;
  } else {
    this.stack.push(val - this.min);
    if (val < this.min) {
      this.min = val;
    }
  }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {

  // top element (will have the difference)
  const top = this.stack.pop();
  // if it is negative then 
  if (top < 0) {
    this.min = this.min - top;
  }

};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  const top = this.stack[this.stack.length - 1];
  return top < 0 ? this.min : this.min + top;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */