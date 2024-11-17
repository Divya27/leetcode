/**
 * 
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 */


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  // maintain left and right pointer
  let left = 0;
  let maxLength = 0
  let maxCount = 0;
  let freqMap = new Map();

  for (let right = 0; right < s.length; right++) {
    const charRight = s[right];
    freqMap.set(charRight, (freqMap.get(charRight) || 0) + 1);

    maxCount = Math.max(maxCount, freqMap.get(charRight));

    if (right - left + 1 - maxCount > k) {
      // move the left pointer
      const charLeft = s[left];
      freqMap.set(charLeft, (freqMap.get(charLeft) || 0) - 1);
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1)
  }
  return maxLength;

};

console.log(characterReplacement("ABAB", 2))