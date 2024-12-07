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
  // let result = '';
  // for (let i = 0, j = 0; i < Math.max(word1.length, word2.length); i++, j++) {
  //   if (word1[i]) result += word1[i];
  //   if (word2[j]) result += word2[j];
  // }
  // return result;

  // another approach
  let result = '';
  let i = 0;

  // Loop through both strings while there are characters in either string
  while (i < word1.length || i < word2.length) {
    if (i < word1.length) {
      result += word1[i]; // Add character from word1 if available
    }
    if (i < word2.length) {
      result += word2[i]; // Add character from word2 if available
    }
    i++;
  }

  return result;
};

console.log(mergeAlternately("abc", "pqr"));