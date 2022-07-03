/**
 * @param {string} s
 * @return {string}
 * 
 * https://leetcode.com/problems/reverse-words-in-a-string/
 * 
 */
var reverseWords = function (s) {
  // console.log(s.trim().split(" ").filter(elem => elem.trim().length > 0).reverse().join(" "))
  return s.trim().split(" ").filter(elem => elem.trim().length > 0).reverse().join(" ")
};

// console.log(reverseWords("a good   example"))
console.log(reverseWords("the sky is blue "))