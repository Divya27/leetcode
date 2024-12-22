/**
 * https://leetcode.com/problems/jump-game/description/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {

  // let farthest = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   // base 
  //   if (i > farthest) return false;
  //   farthest = Math.max(farthest, farthest + i);
  //   if (farthest >= nums.length - 1) {
  //     return true;
  //   }
  // }
  // return false;

  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxIndex) return false;
    maxIndex = Math.max(maxIndex, i + nums[i]);
    if (maxIndex >= nums.length - 1) {
      return true;
    }
  }
  return false;

};

console.log(canJump([2, 3, 1, 1, 4]));