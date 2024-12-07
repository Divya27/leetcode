/**
 * 
 * https://leetcode.com/problems/3sum/
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  if (nums.length < 3) return [];
  // sort 
  nums = nums.sort((a, b) => a - b);

  // iterate through the array
  for (let i = 0; i < nums.length - 2; i++) {

    // duplicates
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // find triplet 
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        // unique triplet 
        result.push([nums[i], nums[left], nums[right]]);

        // check for 2nd elem duplicate
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) left++;
      else if (sum > 0) right--;
    }
  }
  return result;

};


console.log(threeSum([-1, 0, 1, 2, -1, -4]))