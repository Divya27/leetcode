/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * 
 * https://leetcode.com/problems/delete-operation-for-two-strings/
 */
var minDistance = function (word1, word2) {
  let i = 0
  let j = 0
  let opsCount = 0
  word1 = word1.split("").sort().join("")
  word2 = word2.split("").sort().join("")
  console.log("word1: ", word1)
  console.log("word2: ", word2)
  while (word1 !== word2) {
    if (word1[i] === word2[j]) {
      i++
      j++
    }
    // if (word1[i] === word2[j]) {
    //   i++
    //   j++
    // } else if (word1[i] !== word2[j]) {
    //   opsCount += 2
    //   word1 = word1.slice(0, i) + word1.slice(i + 1, word1.length)
    //   word2 = word2.slice(0, j) + word2.slice(j + 1, word2.length)
    //   console.log("word1: word2: now: ", word1, word2)
    // }
  }
  console.log("opsCount: ", opsCount)
  return opsCount
};

// console.log(minDistance("sea", "eat"))

console.log(minDistance("leetcode", "etco"))