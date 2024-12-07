/**
 * 
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // binary search
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    // If the middle element is greater than the rightmost element, it means the smallest element is on the right half.
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else right = mid;
  }
  // When left == right, the minimum element is at either of the pointers.
  return nums[left];
};

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));