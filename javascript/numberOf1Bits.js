/**
 * 
 * https://leetcode.com/problems/number-of-1-bits/description/
 */

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  // Approach 1 - convert to binary and count 1 bits
  // convert to binary
  const binaryNum = n.toString(2);
  let count = 0;
  // iterate through
  for (let i = 0; i < binaryNum.length; i++) {
    if (binaryNum[i] % 2 === 1) {
      count += 1;
    }
  }
  return count;

  // Approach 2 -- let it be decimal and count by % and / 
  // let count = 0;
  // while (n > 1) {
  //     if (n % 2 === 1) count += 1;
  //     n = Math.floor(n / 2);
  //     console.log(n);
  // }
  // if (n === 1) count += 1;
  // return count;
};

console.log(hammingWeight(2147483645))