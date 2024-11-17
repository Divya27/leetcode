/**
 * https://leetcode.com/problems/house-robber/description/
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
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  let prev1 = 0;
  let prev2 = 0;

  for (let i = 0; i < nums.length; i++) {
    const current = Math.max(prev1, nums[i] + prev2);
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
};

console.log(rob([1, 2, 3, 1]))
console.log(rob([2, 7, 9, 3, 1]))
console.log(rob([2, 1, 1, 2]))      // o/p = 4 