/**
 * @param {number[]} nums
 * @return {number}
 * 
 * https://leetcode.com/problems/find-the-duplicate-number/
 */
var findDuplicate = function (nums) {
  let arrMap = new Map()
  let duplicateNum
  for (let i = 0; i < nums.length; i++) {
    if (arrMap.hasOwnProperty(nums[i])) arrMap[nums[i]] += 1
    else arrMap[nums[i]] = 1
    if (arrMap[nums[i]] === 2) {
      duplicateNum = nums[i]
      break
    }
  }
  return duplicateNum

};