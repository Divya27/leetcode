/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) return mid;
    else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))