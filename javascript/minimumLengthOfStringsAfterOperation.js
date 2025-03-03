/**
 * 
 * https://leetcode.com/problems/minimum-length-of-string-after-operations/description/?envType=daily-question&envId=2025-01-13
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  let freqMap = new Map();
  for (let elem of s) {
    freqMap.set(elem, (freqMap.get(elem) || 0) + 1);
  }
  console.log("freq map: ", freqMap);

  let strLength = s.length;
  for (let [elem, freq] of freqMap) {
    console.log("freq: ", freq);
    if (freq > 2) {
      while (freq >= 3) {
        strLength -= 2;
        freq -= 2;
      }
    }

  }
  console.log("strLength: ", strLength);
  return strLength;
};

console.log(minimumLength("abaacbcbb"));