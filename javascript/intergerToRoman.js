/**
 * @param {number} num
 * @return {string}
 * 
 * https://leetcode.com/problems/integer-to-roman/
 */
var intToRoman = function (num) {
  const romanIntMap = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
  return Object.entries(romanIntMap).reduce((result, [letter, n]) => {
    result += letter.repeat(Math.floor(num / n));
    console.log("result: ", result)
    num %= n;
    console.log("num: ", num)
    return result;
  }, '')
};

console.log(intToRoman("2994"))