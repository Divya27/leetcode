
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * 
 * https://leetcode.com/problems/shuffle-the-array/
 */
var shuffle = function (nums, n) {
  let result = []
  for (let i = 0; i < n; i++) {
    result.push(nums[i])
    result.push(nums[i + n])
  }
  console.log("result: ", result)
  return result
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3))