/**
 * https://leetcode.com/problems/jump-game-ii/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {

  if (nums.length === 1) return 0;

  let jumps = 0;
  let maxIndex = 0;
  let currentEnd = 0;

  for (let i = 0; i < nums.length; i++) {
    maxIndex = Math.max(maxIndex, i + nums[i]);

    // if we reach the end of current jump range
    if (i === currentEnd) {
      jumps++;
      currentEnd = maxIndex;

      if (currentEnd >= nums.length - 1) {
        break;
      }
    }
  }
  return jumps;

};

console.log(jump([2, 3, 1, 1, 4]));