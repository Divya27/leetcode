/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */
var findDisappearedNumbers = function (nums) {
  let mapArrCount = new Map()
  let outputResult = []
  for (let i = 0; i < nums.length; i++) {
    if (!mapArrCount.hasOwnProperty(nums[i])) mapArrCount[nums[i]] = 1
    else mapArrCount[nums[i]] += 1
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!mapArrCount.hasOwnProperty(i)) outputResult.push(i)
  }
  console.log("outputResult: ", outputResult)
  return outputResult
};
console.log(findDisappearedNumbers([1,3,3,4,6]))