/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let num = n.toString(2)
  let count = 0
  for (let i = 0; i < num.length; i++) {
    if (num[i] === '1') count += 1
  }
  return count
};

console.log(hammingWeight(00000000000000000000000000001011))