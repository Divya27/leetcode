/**
 * @param {string} s
 * @return {string}
 * 
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 */
var reverseWords = function (s) {
  const words = s.split(" ").reverse()
  console.log(" words: ", words)
  let revStr = words.map(word => {
    return word.split("").reverse().join("")
  })
  console.log("rev str: ", revStr)
  return revStr.join(" ")
};

console.log(reverseWords("Let's take LeetCode contest"))