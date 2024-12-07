/**
 * https://leetcode.com/problems/min-cost-climbing-stairs/?envType=study-plan-v2&envId=dynamic-programming
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {

  let dp0 = cost[0];
  let dp1 = cost[1];

  for (let i = 2; i < cost.length; i++) {
    let currentCost = Math.min(dp0, dp1) + cost[i];
    dp0 = dp1;
    dp1 = currentCost;
  }
  return Math.min(dp0, dp1);
};

console.log(minCostClimbingStairs([10, 15, 20]));