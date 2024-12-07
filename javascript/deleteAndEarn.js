/**
 * 
 * https://leetcode.com/problems/delete-and-earn/description/?envType=study-plan-v2&envId=dynamic-programming
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  let numsMap = {};
  for (let num of nums) {
    if (!numsMap[num]) numsMap[num] = 1;
    else numsMap[num] += 1;
  }
  console.log(numsMap);
  
};

console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]))