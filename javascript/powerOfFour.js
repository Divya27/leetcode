/**
 * @param {number} n
 * @return {boolean}
 * 
 * https://leetcode.com/problems/power-of-four/
 */
var isPowerOfFour = function (n) {
  if (!n) return false
  while (n % 4 == 0) n /= 4
  return n == 1
};

console.log(isPowerOfFour(5))