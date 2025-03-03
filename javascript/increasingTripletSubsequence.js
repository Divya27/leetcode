/**
 * https://leetcode.com/problems/increasing-triplet-subsequence/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  const n = nums.length;
  if (n < 3) return false;

  let small = Infinity;  // The smallest element seen so far
  let middle = Infinity; // The second smallest element seen so far

  for (let num of nums) {
    if (num <= small) {
      // If current num is smaller than or equal to small, update small
      small = num;
    } else if (num <= middle) {
      // If current num is between small and middle, update middle
      middle = num;
    } else {
      // If we find a num larger than middle, return true (triplet found)
      return true;
    }
  }

  return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
console.log(increasingTriplet([1, 5, 0, 4, 1, 3]));