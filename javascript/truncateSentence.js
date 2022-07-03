/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * 
 * https://leetcode.com/problems/truncate-sentence/
 */
var truncateSentence = function (s, k) {
  const sArr = s.split(" ")
  return (sArr.slice(0, k)).join(" ")
};

console.log(truncateSentence("Hello how are you Contestant", 4))