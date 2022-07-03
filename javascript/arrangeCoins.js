/**
 * @param {number} n
 * @return {number}
 * 
 * https://leetcode.com/problems/arranging-coins/
 */
var arrangeCoins = function (n) {
  // i = n * 2 / i + 1
  let stairs = 0
  // let stairs = 0
  while (stairs <= n) {
    n -= stairs        // 7, 5, 2
    stairs++          // 2, 3, 4
  }
  // console.log(stairs - 1)
  return stairs - 1
};

console.log(arrangeCoins(8))

