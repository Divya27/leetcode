/**
 * 
 * https://leetcode.com/problems/climbing-stairs/
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n >= 0 && n <= 2) return n;
  let first = 1;
  let second = 2;
  for (i = 3; i <= n; i++) {
    let temp = first + second;
    first = second;
    second = temp;
  }
  return second;
};

console.log(climbStairs(5))