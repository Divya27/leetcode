/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 * 
 * https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
 * 
 * TO DO 
 */

// const add = numbers => numbers.reduce((x, y) => x + y)

var minOperations = function (nums, x) {
  const total = nums.reduce((x, y) => x + y)
  console.log("total: ", total)

  if (total - x < 0) return -1
  let left = 0, sum = 0, max = -Infinity
  console.log("max: ", max)
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]                  
    while (sum > total - x) sum -= nums[left++]         
    max = sum === total - x ? Math.max(max, right - left + 1) : max
  }

  return max === -Infinity ? -1 : nums.length - max
};

console.log(minOperations([1, 1, 4, 2, 3], 5))