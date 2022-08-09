/**
 * @param {number} n
 * @return {number}
 * 
 * https://leetcode.com/problems/complement-of-base-10-integer/
 */
var bitwiseComplement = function (n) {
  n = n.toString(2)
  console.log("n:", n)
  n = (n ^ 1).toString(10)
  console.log("n:", n)
};

console.log(bitwiseComplement(5))