/**
 * https://leetcode.com/problems/basic-calculator/description/?envType=study-plan-v2&envId=top-interview-150
 */

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var calculate = function (s) {
//   let stack = [];
//   let currentNum = 0;
//   let sign = 1;
//   let result = [];
//   console.log(s);

//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];

//     if (char === ' ') continue;

//     if (char === '(') {
//       // push the result till now and sign to the stack
//       stack.push(result);
//       stack.push(sign);
//       // reset both
//       result = 0;
//       sign = 1;
//     }
//     else if (char === ')') {
//       // multiple the sign and add the previous result
//       result = result * stack.pop() + stack.pop();
//     }

//     else if (char === '+' || char === '-') {
//       result += sign * currentNum;
//       currentNum = 0;
//       sign = (char === '+') ? 1 : -1;
//     }

//     else if (/\d/.test(char)) {
//       // number is more than 10
//       currentNum = currentNum * 10 + (char - '0');
//     }
//   }

//   result += sign * currentNum;
//   console.log("result: ", result);
//   return result;

// };

var calculate = function (s) {
  let stack = [];
  let current_num = 0;
  let sign = 1; // 1 represents positive, -1 represents negative
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === ' ') {
      continue; // Skip spaces
    }

    if (char === '(') {
      // Push the current result and sign onto the stack
      stack.push(result);
      stack.push(sign);
      // Reset result and sign for the new sub-expression
      result = 0;
      sign = 1;
    } else if (char === ')') {
      // Pop the sign and previous result from the stack
      result = result * stack.pop() + stack.pop();
    } else if (char === '+' || char === '-') {
      // Update the result with the current number and sign
      result += sign * current_num;
      // Reset current number
      current_num = 0;
      // Update the sign for the next number
      sign = (char === '+') ? 1 : -1;
    } else if (/\d/.test(char)) {
      // Build the current number
      current_num = current_num * 10 + (char - '0');
    }
  }

  // Add the last number to the result
  result += sign * current_num;
  console.log("result: ", result);
  return result;
};

// Example usage:
console.log(calculate("1-(     -2)")); // Output: 3


// Example usage:
console.log(calculate("1 + 1")); // Output: 2
console.log(calculate(" 2-1 + 2 ")); // Output: 3
console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // Output: 23



// console.log(calculate("1 + 1"));
// console.log(calculate(" 2-1 + 2 "));
// console.log(calculate("(1+(4+5+2)-3)+(6+8)"));