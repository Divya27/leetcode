/**
 * https://leetcode.com/problems/contains-duplicate-ii/description/?envType=study-plan-v2&envId=top-interview-150
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // check if duplicate is found within k range
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numsMap.has(nums[i]) && (i - numsMap.get(nums[i]) <= k)) {
      // if same number is found within range of k
      return true;
    }
    numsMap.set(nums[i], i);
  }
  return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
