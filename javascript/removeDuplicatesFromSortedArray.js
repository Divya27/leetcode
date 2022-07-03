/**
 * @param {number[]} nums
 * @return {number}
 * 
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */
var removeDuplicates = function (nums) {
  for (let i in nums) {
    while (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
      nums.splice(nums.lastIndexOf(nums[i]), 1)
    }
  }
  console.log("nums:", nums)
  return nums.length
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))