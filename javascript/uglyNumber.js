/**
 * @param {number} n
 * @return {boolean}
 * 
 * https://leetcode.com/problems/ugly-number/
 */
var isUgly = function (n) {
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0 && (n / i !== 2 || n / i !== 3 || n / i !== 5)) return false
    else return true
  }

};

console.log(isUgly(6))