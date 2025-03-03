/**
 * https://leetcode.com/problems/daily-temperatures/
 */
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  /**
   * concept of monotonic stack
   * next greater element
   * moves in either non-increasing or non-decreasing direction (one side)
   */
  // const n = temperatures.length;

  // const answer = Array(n).fill(0);
  // const stack = [];

  // // Traverse the array from left to right
  // for (let i = 0; i < n; i++) {
  //   // Pop elements from the stack that are smaller than the current temperature
  //   while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
  //     const index = stack.pop();  // Get the index of the smaller temperature
  //     answer[index] = i - index;  // Calculate the number of days to the next warmer temperature
  //   }

  //   // Push the current index onto the stack
  //   stack.push(i);
  // }

  // console.log("answer:: ", answer);
  // return answer;

  // another approach 

  let stack = [];
  let answer = new Array(temperatures.length).fill(0);

  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
      stack.pop();
    }
    if (stack.length) answer[i] = stack[stack.length - 1] - i;

    stack.push(i);
  }
  // console.log(answer)
  return answer;

};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));


