/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    // if current day's stock price is more than previous day (calculate profit and add it to maxProfit)
    // iterate through all the days and accumulate the total profit
    if (prices[i] > prices[i - 1]) {
      maxProfit += (prices[i] - prices[i - 1]);
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));