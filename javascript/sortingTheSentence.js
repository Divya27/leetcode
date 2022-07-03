/**
 * @param {string} s
 * @return {string}
 * 
 * https://leetcode.com/problems/sorting-the-sentence/
 */
var sortSentence = function (s) {
  const sArr = s.split(" ")
  console.log("sArr: ", sArr)
  const resultantArr = new Array(sArr.length - 1)
  for (let word of sArr) {
    let position = word[word.length - 1]
    console.log("position: ", position)
    resultantArr[position - 1] = word.slice(0, word.length - 1)
  }
  console.log("result :", resultantArr)
  return resultantArr.join(" ")
};

console.log(sortSentence("is2 sentence4 This1 a3"))