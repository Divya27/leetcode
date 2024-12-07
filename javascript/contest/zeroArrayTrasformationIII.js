/**
 * https://leetcode.com/contest/biweekly-contest-144/problems/zero-array-transformation-iii/
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maxRemoval = function (nums, queries) {
  // pending
  const maxFromNums = Math.max(...nums);
  console.log(maxFromNums)
};

console.log(maxRemoval([2, 0, 2], [[0, 2], [0, 2], [1, 1]]))