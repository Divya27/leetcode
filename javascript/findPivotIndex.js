/**
 * https://leetcode.com/problems/find-pivot-index/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let totalSum = 0;
  let leftSum = 0;

  // calculate the total sum
  for (let num of nums) {
    totalSum += num;
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i;
    }
    // update left sum for next iteration
    leftSum += nums[i];
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));