/**
 * https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let nonZeroIndex = 0;
  // iterate - if non zero elem is found - swap 
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // non zero elem found, move it to the starting 
      [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
      nonZeroIndex++
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]))