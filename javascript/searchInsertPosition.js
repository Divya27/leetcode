/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * https://leetcode.com/problems/search-insert-position/
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) return i
    else {
      if (target < nums[i] && i === 0) return 0
      else if ((target > nums[i] && i === nums.length - 1) || (target > nums[i] && target < nums[i + 1])) return i + 1
      // else if (target > nums[i] && target < nums[i + 1]) return i + 1
    }
  }
};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 7))