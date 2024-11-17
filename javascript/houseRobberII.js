/**
 * https://leetcode.com/problems/house-robber-ii/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // adjacent house cannot be robbed
  // 2 choices : rob the house i or skip it 
  // if robbed -- nums[i] + dp[i-2]
  // if not robbed -- dp[i-1]
  // same as house robber problem -- just here houses are arranged in circular manner 

  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  function robLinear(nums) {
    let prev1 = 0;
    let prev2 = 0;

    for (let i = 0; i < nums.length; i++) {
      const current = Math.max(prev1, nums[i] + prev2);
      prev2 = prev1;
      prev1 = current;
    }
    return prev1;
  }

  // case 1 -- rob houses form 0 to n-2, skip the last house 
  const case1 = robLinear(nums.slice(0, n - 1));

  // case 2 -- rob the houses from 1 to last, skip the first one
  const case2 = robLinear(nums.slice(1));

  return Math.max(case1, case2);
};

console.log(rob([2, 3, 2]))
console.log(rob([1, 2, 3, 1]))
console.log(rob([1, 2, 3]))
