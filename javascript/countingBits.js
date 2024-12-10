/**
 * https://leetcode.com/problems/counting-bits/description/
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(i.toString(2));
  }
  console.log(result);
};

console.log(countBits(5));