/**
 * https://leetcode.com/problems/counting-bits/description/
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  // to be understood
  let count = new Array(n + 1).fill(0);  // Create an array to store the number of set bits for each number

  // Loop through numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    // Count[i] = Count[i >> 1] + (i & 1)
    // i >> 1 is the result of shifting the bits of i to the right (integer division by 2)
    // (i & 1) checks if the number is odd (1) or even (0)
    count[i] = count[i >> 1] + (i & 1);
  }

  return count;
};


console.log(countBits(5));