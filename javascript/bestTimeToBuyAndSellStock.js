/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // let maxProfit = 0
  // let buy = prices[0]         // buying on 1st day by default
  // for (let i = 1; i < prices.length; i++) {
  //   if (prices[i] < buy) buy = prices[i]
  //   else if ((prices[i] > buy) && (prices[i] - buy > maxProfit)) {
  //     maxProfit = prices[i] - buy
  //   }
  // }
  // console.log("max profit: ", maxProfit)
  // return maxProfit

  // approach 2 

  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) minPrice = price;
    const profit = price - minPrice;
    if (profit > maxProfit) maxProfit = profit;
  }
  return maxProfit;

};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))