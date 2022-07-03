/**
 * @param {number} num
 * @return {number}
 * 
 * https://leetcode.com/problems/add-digits/
 * 
 * table of 9
 */
var addDigits = function (num) {
  if (num === 0) return 0
  else {
    if (num % 9 === 0) return 9
    else return num % 9
  }
};

console.log(addDigits(38))