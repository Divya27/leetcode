/**
 * @param {string[]} words
 * @return {string[]}
 * 
 * https://leetcode.com/problems/find-common-characters/
 */
var commonChars = function (words) {
  words = words.sort((a, b) => a - b)

};

console.log(commonChars(["bella", "label", "roller"]))