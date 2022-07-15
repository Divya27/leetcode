/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * https://leetcode.com/problems/monotonic-array/
 */
var isMonotonic = function (nums) {

  let isIncreasing = false
  let isDecreasing = false

  let i = 1
  while (nums[i] !== nums[0]) {
    if (nums[i] > nums[0]) isIncreasing = true
    else if (nums[i] < nums[0]) isDecreasing = true
    i += 1
  }
  console.log("i:", i, isDecreasing, isIncreasing)
};

console.log(isMonotonic([1, 1, 2, 2, 3]))