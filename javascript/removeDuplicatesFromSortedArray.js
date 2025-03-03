/**
 * @param {number[]} nums
 * @return {number}
 * 
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * TC : O(n) SC: O(1)
 */
var removeDuplicates = function (nums) {
  // approach 1 

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      nums[i + 1] = nums[j]
      i += 1;
    }
  }
  console.log("nums: ", nums);
  return i + 1;

  // approach 2
  // for (let i in nums) {
  //   while (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
  //     nums.splice(nums.lastIndexOf(nums[i]), 1)
  //   }
  // }
  // console.log("nums:", nums)
  // return nums.length
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))