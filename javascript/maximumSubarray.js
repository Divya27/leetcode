/**
 * https://leetcode.com/problems/maximum-subarray/description/
 * 
 * KADANE's ALGORITHM
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

  // approach 1 -- will just give the max sum ==> TC : beats 100% 
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;


  // approach 2 -- to have max sum as well as the subarray
  // let currentSum = nums[0];
  // let maxSum = nums[0];
  // let tempStart = 0;    // change when subarray is changed
  // let start = 0;
  // let end = 0;

  // for (let i = 1; i < nums.length; i++) {
  //   if (nums[i] > nums[i] + currentSum) { // that means currentSum is negative
  //     // new subarray 
  //     currentSum = nums[i];
  //     tempStart = i;
  //   } else {
  //     currentSum += nums[i]
  //   }

  //   // check if currentSum is more
  //   if (currentSum > maxSum) {
  //     maxSum = currentSum;
  //     start = tempStart;
  //     end = i;
  //   }
  // }
  // console.log("Subarray is : ", nums.slice(start, end + 1)) // to include the end as well
  // return maxSum;

};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))