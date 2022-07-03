/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * https://leetcode.com/problems/running-sum-of-1d-array/
 */
var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1]
    console.log("now num[i] : ", nums[i])
  }
  return nums
};


console.log(runningSum([1, 2, 3, 4]))