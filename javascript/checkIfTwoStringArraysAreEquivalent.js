/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 * 
 * https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
 */
var arrayStringsAreEqual = function (word1, word2) {
  const str1 = word1.reduce((acc, curr) => acc + curr, "")
  const str2 = word2.reduce((acc, curr) => acc + curr, "")
  console.log("str1: str2: ", str1, str2)
  if (str1 === str2) return true
  else return false
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))