/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/?envType=study-plan-v2&envId=top-interview-150
 * 
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {

  const stackArr = [];

  for (const token of tokens) {
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      // pop last 2 elems and perform operation
      const b = stackArr.pop();
      const a = stackArr.pop();
      let result;

      switch (token) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          result = Math.trunc(a / b);
          break;
      }
      stackArr.push(result)

    } else {
      // push the int number
      stackArr.push(parseInt(token, 10));
    }
  }

  // only result will remain atlast
  return stackArr.pop();
};

console.log(evalRPN(["2", "1", "+", "3", "*"]))
console.log(evalRPN(["4", "13", "5", "/", "+"]))
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))
