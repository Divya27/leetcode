/**
 * 
 * https://leetcode.com/problems/longest-increasing-subsequence/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {

  // Approach 1 , TC: O(nˆ2)
  // if (!nums || nums.length === 0) return 0;
  // const n = nums.length;

  // // dp array 
  // const dp = new Array(n).fill(1);
  // // dp[i] will indicate the length of longest subsequence ending at i 

  // for (let i = 1; i < n; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (nums[i] > nums[j]) {
  //       dp[i] = Math.max(dp[i], dp[j] + 1);
  //     }
  //   }
  // }
  // console.log(dp);
  // return Math.max(...dp);

  // Approach 2 - using binary search TC: O(n log n)
  let tails = [];

  for (let num of nums) {
    let left = 0;
    let right = tails.length;

    // Use binary search to find the position to replace or append the number
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    // If num is larger than all elements, append it to the tails array
    if (left === tails.length) {
      tails.push(num);
    } else {
      // Otherwise, replace the element at the found index
      tails[left] = num;
    }
  }

  return tails.length;

};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));