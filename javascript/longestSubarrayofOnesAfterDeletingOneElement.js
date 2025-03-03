/**
 * https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let maxLength = 0;
  let zeroCount = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount += 1;
    if (zeroCount > 1) {
      // shrink window
      if (nums[left] === 0) zeroCount -= 1;
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength - 1;
};

console.log(longestSubarray([1, 1, 0, 1]));
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));