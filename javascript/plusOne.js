/**
 * @param {number[]} digits
 * @return {number[]}
 * 
 * https://leetcode.com/problems/plus-one/
 * 
 */
var plusOne = function (digits) {
  console.log("digits: ", digits)
  let numLen = digits.length

  // add 1 to last digit of the number
  digits[numLen - 1] += 1
  // check if there is any carry over
  let carry = digits[numLen - 1] / 10
  // update the last digit considering the carry
  digits[numLen - 1] = digits[numLen - 1] % 10

  // loop through 2nd last elem to initial first elem
  for (let i = numLen - 2; i >= 0; i--) {
    // if carry is 1 -- perform above same steps
    if (carry === 1) {
      digits[i] += 1        // add carry
      carry = digits[i] / 10
      digits[i] = digits[i] % 10
    }
  }

  // check if still there is carry
  if (carry === 1) {
    // add that 1 at first position
    digits.unshift(1)
  }
  console.log("digits:", digits)
  return digits
};

// console.log(plusOne([9]))
console.log(plusOne([1,9,9,9,9]))