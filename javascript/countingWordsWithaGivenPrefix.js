/**
 * https://leetcode.com/problems/counting-words-with-a-given-prefix/description/?envType=daily-question&envId=2025-01-09
 */

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let count = 0;
  const prefixLen = pref.length;
  console.log("prefix length: ", prefixLen);
  for (let word of words) {
    if (word.substring(0, prefixLen) === pref) count += 1;
  }
  console.log("count: ", count);
  return count;
};

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"))