/**
 * @param {number} num
 * @return {number}
 * 
 * https://leetcode.com/problems/number-complement/
 */
var findComplement = function (num) {
  let binNum = num.toString(2).split("")
  console.log("binNum: ", binNum)
  return parseInt(binNum.map(elem => (elem == '1') ? '0' : '1').join(""), 2)
};

console.log(findComplement(5))