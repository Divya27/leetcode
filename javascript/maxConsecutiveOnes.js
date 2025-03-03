/**
 * https://leetcode.com/problems/max-consecutive-ones/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  // another approach 

  let maxSize = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count += 1;
    } else {
      count = 0;
    }
    maxSize = Math.max(maxSize, count);

  }
  console.log("max size: ", maxSize);
  return maxSize;

  // let maxConsecutive = 0
  // let consecutiveCount = 0
  // for (const num of nums) {
  //   if (num === 1) {
  //     consecutiveCount += 1
  //   } else {
  //     consecutiveCount = 0
  //   }
  //   if (consecutiveCount > maxConsecutive) {
  //     maxConsecutive = consecutiveCount
  //   }
  // }
  // console.log("maxConsecutive: ", maxConsecutive)
  // return maxConsecutive
};
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))