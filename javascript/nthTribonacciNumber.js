/**
 * https://leetcode.com/problems/n-th-tribonacci-number/description/?envType=study-plan-v2&envId=dynamic-programming
 * 
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

 */

/**
 * @param {number} n
 * @return {number}
 */
let cache = {};
var tribonacci = function (n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  if (cache[n]) return cache[n];
  const result = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
  cache[n] = result;
  return result;
};

console.log(tribonacci(4));