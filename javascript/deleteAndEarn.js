/**
 * 
 * https://leetcode.com/problems/delete-and-earn/description/?envType=study-plan-v2&envId=dynamic-programming
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  // freq map - occurence 
  // take or skip 

  if (nums.length === 0) return 0;

  // max num
  const maxNum = Math.max(...nums);
  // console.log("max num is: ", maxNum);
  const freqMap = new Array(maxNum + 1).fill(0); // initial freq 0 for all

  // iterate through nums for frequency
  for (let num of nums) {
    freqMap[num] += 1;
  }
  // console.log("freq map: ", freqMap);

  // dp array 
  const dp = new Array(maxNum + 1).fill(0);

  // base case
  dp[0] = 0;
  dp[1] = freqMap[1] * 1;

  // for each number from 2 to maxNum -- calculate dp
  for (let i = 2; i <= maxNum; i++) {
    // skip and take
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + (freqMap[i] * i));
    // console.log("i: dp[i] : ", i, dp[i]);
  }

  // console.log(dp[maxNum]);
  return dp[maxNum];

};

console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]))