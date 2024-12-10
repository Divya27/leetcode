/**
 * https://leetcode.com/problems/combination-sum-iv/description/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {

  // each number can be used unlimited times, find all ways tp sum up to target using values from nums 
  // using dp - more efficient
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;    // 1 way to have sum 0 --> no numbers

  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i - num >= 0) {
        dp[i] = dp[i] + dp[i - num]
      }
    }
  }
  console.log("DP: ", dp)
  return dp[target];
};

console.log(combinationSum4([1, 2, 3], 4));
