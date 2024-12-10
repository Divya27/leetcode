/**
 * https://leetcode.com/problems/longest-palindrome/description/
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return 1;
  const sMap = new Map();
  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }
  let maxLength = 0;
  let hasOdd = false;
  for (let [elem, freq] of sMap.entries()) {
    if (freq % 2 === 0) {
      maxLength += freq;
    } else {
      // we can only use even occurences 
      maxLength += (freq - 1);
      hasOdd = true;
    }
  }
  // add 1 to it, as it has odd and can be placed at the centre
  if (hasOdd) maxLength += 1
  console.log(maxLength);
  return maxLength;
};

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("bananas"));