/**
 * https://leetcode.com/problems/decode-string/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  for (let elem of s) {
    if (elem !== ']') {
      stack.push(elem);
      continue;
    }
    // closing braces
    let repeatStr = '';
    let currentChar = stack.pop();
    while (currentChar !== '[') {
      repeatStr = currentChar + repeatStr;
      currentChar = stack.pop();
    }
    console.log("repeat str: ", repeatStr);
    currentChar = stack.pop();
    let num = '';
    while (!Number.isNaN(Number(currentChar))) {
      num = currentChar + num;
      currentChar = stack.pop();
    }
    console.log("num: ", num);
    stack.push(currentChar)
    stack.push(repeatStr.repeat(Number(num)));
  }
  console.log("stack::", stack);
  return stack.join('');
};

console.log(decodeString("3[a]2[bc]"));