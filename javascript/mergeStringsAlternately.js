/**
 * 
 * https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = '';
  for (let i = 0, j = 0; i < Math.max(word1.length, word2.length); i++, j++) {
    if (word1[i]) result += word1[i];
    if (word2[j]) result += word2[j];
  }
  return result;
};

console.log(mergeAlternately("abc", "pqr"));