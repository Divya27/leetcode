/**
 * @param {string[]} sentences
 * @return {number}
 * 
 * https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
 */
var mostWordsFound = function (sentences) {
  let maxWords = 0
  for (let sentence of sentences) {
    const words = (sentence.split(" ")).length
    if (words > maxWords) maxWords = words
  }
  return maxWords
};

// console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]))