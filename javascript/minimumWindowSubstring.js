/**
 * 
 * https://leetcode.com/problems/minimum-window-substring/description/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return "";
  if (s === t) return s;

  // map for both
  const tCount = new Map();
  const windowCount = new Map();

  // calculate freq of each elem in t
  for (let char of t) {
    tCount.set(char, (tCount.get(char) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let validCount = 0; // to keep track of char count that matches with t
  let minLen = Infinity;
  let minStart = 0;

  // iterate through loop
  while (right < s.length) {
    const charRight = s[right];
    windowCount.set(charRight, (windowCount.get(charRight) || 0) + 1);

    // check if freq of each of the chars in tCount matches windowCount
    if (windowCount.get(charRight) === tCount.get(charRight)) {
      validCount++;
    }

    // check for valid window, and shrink for min size
    while (validCount === tCount.size) {
      const windowLength = right - left + 1;
      if (windowLength < minLen) {
        minLen = windowLength;
        minStart = left;
      }

      // shrink the window
      const charLeft = s[left]; // window to be shrink, char to be removed so decrease the size
      windowCount.set(charLeft, (windowCount.get(charLeft) || 0) - 1);
      if (windowCount.get(charLeft) < tCount.get(charLeft)) {
        validCount--;
      }
      left++;
    }
    right++
  }

  return minLen === Infinity ? "" : s.slice(minStart, minStart + minLen);

};

console.log(minWindow("ADOBECODEBANC", "ABC"));