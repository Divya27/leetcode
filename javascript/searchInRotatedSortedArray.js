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

  while (left <= right) {
    // check for mid element
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    // check which side is sorted 
    // left side array is sorted 
    if (nums[left] <= nums[mid]) {
      // check for target 
      if (nums[left] <= target && target < nums[mid]) {
        // target is in left half
        right = mid - 1;
      } else {
        // right half
        left = mid + 1
      }
    } else {
      // right side array is sorted
      if (nums[mid] < target && target <= nums[right]) {
        // target is in right half
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;

};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))