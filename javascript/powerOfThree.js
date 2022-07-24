/**
 * @param {number} n
 * @return {boolean}
 * 
 * https://leetcode.com/problems/power-of-three/
 */
var isPowerOfThree = function (n) {
  if (!n) return false
  while (n % 3 == 0) n /= 3
  return n == 1
};

console.log(isPowerOfThree(9))
console.log(isPowerOfThree(0))
console.log(isPowerOfThree(1))
console.log(isPowerOfThree(27))
console.log(isPowerOfThree(387420488))