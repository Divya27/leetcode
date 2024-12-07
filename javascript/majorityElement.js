/**
 * @param {number[]} nums
 * @return {number}
 * 
 * https://leetcode.com/problems/majority-element/
 */
var majorityElement = function (nums) {
  const numsMap = new Map();
  for (let num of nums) {
    numsMap.set(num, (numsMap.get(num) || 0) + 1);
  }
  for (let [num, freq] of numsMap.entries()) {
    if (freq > nums.length / 2) return num;
  }
  return -1;
  
  // const numsMap = new Map()
  // for (let i = 0; i < nums.length; i++) {
  //   if (numsMap.hasOwnProperty(nums[i])) numsMap[nums[i]] += 1
  //   else numsMap[nums[i]] = 1

  //   if(numsMap[nums[i]] >= nums.length/2) return nums[i]
  // }
  // console.log("nums map: ", numsMap)

};

console.log(majorityElement([3, 2, 3]))