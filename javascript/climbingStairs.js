/**
 * 
 * https://leetcode.com/problems/climbing-stairs/
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // if (n >= 0 && n <= 2) return n;
  // let first = 1;
  // let second = 2;
  // for (i = 3; i <= n; i++) {
  //   let temp = first + second;
  //   first = second;
  //   second = temp;
  // }
  // return second;

  if (n >= 0 && n <= 2) return n;
  let prev1 = 2;
  let prev2 = 1;
  for (let i = 3; i <= n; i++) {
    let current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
};

console.log(climbStairs(5))