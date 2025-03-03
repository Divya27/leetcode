/**
 * https://leetcode.com/problems/construct-k-palindrome-strings/description/
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  // we can't have k length palindrome if length of s is less than k
  if (s.length < k) return false;
  let freqMap = {};
  let singleCharCount = 0;

  for (let elem of s) {
    freqMap[elem] = (freqMap[elem] || 0) + 1;
  }

  console.log("freq map: ", freqMap);

  // count the number of chars that have odd frequency
  for (let freq of Object.values(freqMap)) {
    if (freq % 2 === 1) singleCharCount += 1;
  }
  console.log("single char count: ", singleCharCount);

  // check if we can have k palindromes
  return (singleCharCount <= k && k <= s.length);

};

console.log(canConstruct("annabelle", 2));