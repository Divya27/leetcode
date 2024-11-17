/**
 * 
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  // if this is not true then there is no common divisor
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  // gcd function
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  // calculate gcd of the length of 2 strings
  const lengthGCD = gcd(str1.length, str2.length);

  // fetch the sub string from the actual string
  return str1.slice(0, lengthGCD);

};

console.log(gcdOfStrings("ABCABC", "ABC"));
// console.log(gcdOfStrings("ABABAB", "ABAB"))
// console.log(gcdOfStrings("LEET", "CODE"))