/**
 * https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  // Edge case: when the array length is 1 and k = 1
  if (nums.length === 1 && k === 1) return nums[0];

  // Initialize the sum of the first window
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  // The max average starts as the average of the first window
  let maxAvg = currentSum / k;

  // Now, slide the window across the array
  for (let i = k; i < nums.length; i++) {
    currentSum += nums[i] - nums[i - k];  // Add the next element, remove the leftmost element
    maxAvg = Math.max(maxAvg, currentSum / k);  // Update maxAvg if we find a larger average
  }

  return maxAvg;

};

// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([0, 1, 1, 3, 3], 4));