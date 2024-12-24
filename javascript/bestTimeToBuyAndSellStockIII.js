/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // profit after 1 transaction
  let profit1 = 0;
  // profit after 2 transactions
  let profit2 = 0;
  let minPrice1 = prices[0];
  let minPrice2 = prices[0];

  for (let i = 1; i < prices.length; i++) {
    profit1 = Math.max(profit1, prices[i] - minPrice1);
    profit2 = Math.max(profit2, prices[i] - minPrice2);

    // min price 
    minPrice1 = Math.min(minPrice1, prices[i]);
    minPrice2 = Math.min(minPrice2, prices[i] - profit1);
  }

  return profit2;
};

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))