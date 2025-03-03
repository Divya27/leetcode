/**
 * https://leetcode.com/problems/max-consecutive-ones-iii/submissions/1560459605/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let maxLength = 0;
  let zeroCount = 0;

  for (let right = 0; right < nums.length; right++) {
    // count no of zeroes 
    if (nums[right] === 0) zeroCount += 1;

    // shrink the window size from the left
    if (zeroCount > k) {
      if (nums[left] === 0) zeroCount -= 1;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));