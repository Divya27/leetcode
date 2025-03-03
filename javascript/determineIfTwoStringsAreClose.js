/**
 * https://leetcode.com/problems/determine-if-two-strings-are-close/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  let freqMap1 = new Map();
  let freqMap2 = new Map();

  for (let i = 0; i < word1.length; i++) {
    freqMap1.set(word1[i], (freqMap1.get(word1[i]) || 0) + 1);
    freqMap2.set(word2[i], (freqMap2.get(word2[i]) || 0) + 1);
  }
  const keys1 = [...freqMap1.keys()].sort().join('');
  const keys2 = [...freqMap2.keys()].sort().join('');
  console.log(keys1);
  console.log(keys2);

  if (keys1 !== keys2) return false;
  const values1 = [...freqMap1.values()].sort().join('');
  const values2 = [...freqMap2.values()].sort().join('');
  console.log(values1);
  console.log(values2);

  if (values1 !== values2) return false;
  return true;

};

// console.log(closeStrings("abc", "bca"));
// console.log(closeStrings("a", "aa"));
console.log(closeStrings("cabbba", "abbccc"));