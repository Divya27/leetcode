/**
 * https://leetcode.com/problems/rotate-array/description/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  /**
   *  Reverse the entire array.
      Reverse the first k elements.
      Reverse the last n-k elements.
   */
  const n = nums.length;
  k = k % n;

  function reverse(start, end) {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);
  console.log("nums: ", nums);
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));