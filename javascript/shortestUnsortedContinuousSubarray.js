/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  if (nums.length === 1) return 0

  let minSoFar = nums[0]    // 2
  let maxSoFar = nums[0]    // 2

  // for (let i = 1; i < nums.length; i++) {
  //   if (nums[i] < minSoFar) {
  //     minSoFar = nums[i]
  //   }
  //   if (nums[i] > maxSoFar) {
  //     maxSoFar = nums[i]
  //   }

  //   console.log("min and max so far:", minSoFar, maxSoFar)
  // }
};

const nums = [2, 6, 4, 8, 10, 9, 15]
console.log(findUnsortedSubarray(nums))
