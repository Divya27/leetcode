/**
 * @param {number[]} nums
 * @return {number}
 * 
 * https://leetcode.com/problems/third-maximum-number/
 */
var thirdMax = function (nums) {
  nums = [...new Set(nums)].sort((a, b) => b - a)
  console.log("nums:", nums)
  return (nums.length >= 3) ? nums[2] : nums[0]
};

// console.log(thirdMax([2, 2, 3, 1]))

console.log(thirdMax([1, 2]))
