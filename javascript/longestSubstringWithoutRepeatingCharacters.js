/**
* @param {string} s
* @return {number}
*
* https://leetcode.com/problems/longest-substring-without-repeating-characters/
 
*/

var lengthOfLongestSubstring1 = function (s) {
  let str = '';
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    console.log("ch is : ", ch)
    if (!str.includes(ch)) { // if the  current value is not exist in str, calculate max length and add current value to str
      maxLength = Math.max(maxLength, (str + ch).length);
      str += ch;
      console.log("str does not include ch , so now str is :", str)
    }
    else { // if the  current value exist in str
      const index = str.indexOf(ch);  //calculate the index of the current value from the str
      str = str.slice(index + 1) + ch; // set the str to a new string with the repeated character removed
      console.log("found same ch: so now str is : ", str)
    }
  }

  return maxLength;
};

// console.log(lengthOfLongestSubstring('abcabcdefghf'))


/**

// Theory: use a sliding window. End of sliding window is incremented by 1 every loop iteration, while beginning
// is moved to the point of last repeating character. Last repeating char is stored in lookup table keyed by char,
// with val being the index of last occurrence.

var lengthOfLongestSubstring = function (s) {
  let result = 0;
  let lookupTable = {};
  let i = 0;

  for (let j = 0; j < s.length; j++) {
    if (lookupTable[s[j]]) {
      i = Math.max(lookupTable[s[j]], i);
    }

    // update return value to either its current value, or the size of the sliding window + 1
    result = Math.max(result, j - i + 1);
    // update lookup table
    lookupTable[s[j]] = j + 1;
  }
  console.log("lookupTable: ", lookupTable)
  return result;
};

console.log(lengthOfLongestSubstring('abcabcbb'))
 */

/**

var lengthOfLongestSubstring = function (s) {
  // need to find length of longest substring only
  let maxLength = 0
  let currentStr = ''

  // loop through entire string
  for (let i = 0; i < s.length; i++) {
    // if current char is not found in our current subsring

    if (!currentStr.includes(s[i])) {
      // add it to our current str
      currentStr += s[i]
      // detect the max length till now
      maxLength = Math.max(maxLength, currentStr.length)
    } else {
      // if current str includes the char already
      const indexChar = currentStr.indexOf(s[i])
      // set the current str to a new string with the repeated character removed and its preceding chars and add this char to it
      currentStr = currentStr.slice(indexChar + 1) + s[i]
    }
  }
  return maxLength
};
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let left = 0;
  let subStrSet = new Set();
  for (let right = 0; right < s.length; right++) {
    while (subStrSet.has(s[right])) {
      subStrSet.delete(s[left]);
      left++;
    }
    subStrSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

// console.log(lengthOfLongestSubstring('abcabcdefghf'))
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('pwwkew'))