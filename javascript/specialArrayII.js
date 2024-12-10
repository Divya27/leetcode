/**
 * https://leetcode.com/problems/special-array-ii/description/?envType=daily-question&envId=2024-12-09
 */

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {

  // TODO : for 1 tc, getting time limit exceeded
  const result = [];
  const n = nums.length;

  // store the result for each, instead of evaluating every time
  const isSpecialPrefix = new Array(n).fill(true);

  for (let i = 1; i < n; i++) {
    if (nums[i] % 2 === nums[i - 1] % 2) {
      isSpecialPrefix[i] = false;
    };
  }

  // process for each query
  for (let query of queries) {
    const [start, end] = query;
    // Check if the entire range [start, end] has alternating parity
    let isValid = true;
    for (let i = start + 1; i <= end; i++) {
      if (!isSpecialPrefix[i]) {
        isValid = false;
        break;
      }
    }
    result.push(isValid);
  }
  return result;

};

console.log(isArraySpecial([3, 4, 1, 2, 6], [[0, 4]]))