/**
 * @param {number[]} nums
 * @return {number}
 * 
 * https://leetcode.com/problems/majority-element/
 */
var majorityElement = function (nums) {
  const numsMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (numsMap.hasOwnProperty(nums[i])) numsMap[nums[i]] += 1
    else numsMap[nums[i]] = 1

    if(numsMap[nums[i]] >= nums.length/2) return nums[i]
  }
  // console.log("nums map: ", numsMap)

};

console.log(majorityElement([3, 2, 3]))