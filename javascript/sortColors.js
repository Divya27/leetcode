/**
 * https://leetcode.com/problems/sort-colors/description/
 * 
 * Algorithm : Dutch National Flag algorithm
 * 
 * 1. low to track the boundary of 0's.
   2. mid to track the current element being processed.
   3. high to track the boundary of 2's.

   1. Dutch National Flag Algorithm:
   2. low pointer: It keeps track of the boundary where the 0's should be placed.
   3. mid pointer: It scans through the array.

 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;
  while (mid <= high) {
    // check mid and swap accordingly as needed
    if (nums[mid] === 0) {
      // swap it with low element
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // it is proper, so just increment the mid pointer
      mid++;
    } else {
      // it might be 2 - so swap with high element
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
      // mid needs to be processed still after swapping
    }
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]))
console.log(sortColors([2, 0, 1]))
console.log(sortColors([1, 0, 2]))