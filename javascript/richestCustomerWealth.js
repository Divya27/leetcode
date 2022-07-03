/**
 * @param {number[][]} accounts
 * @return {number}
 * 
 * https://leetcode.com/problems/richest-customer-wealth/
 */
var maximumWealth = function (accounts) {
  let maxWealth = 0
  for (let account of accounts) {
    let totalAmount = 0
    console.log("account: ", account)
    account.forEach(amount => totalAmount += amount)
    if (totalAmount > maxWealth) maxWealth = totalAmount
  }
  return maxWealth
};

/**
 * other way
 * var maximumWealth = function(accounts) {
   return Math.max(...accounts.map(customer => customer.reduce((acc, curr) => acc + curr)));
};
 */

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]))