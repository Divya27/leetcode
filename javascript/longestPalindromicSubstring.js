/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

  if (s.length === 0) return "";
  else if (s.length === 1) return s[0];

  let start = 0;    // starting index of palindrome
  let end = 0;      // end index

  // expand around center 
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    // odd and even 
    let len1 = expandAroundCenter(i, i);
    let len2 = expandAroundCenter(i, i + 1);

    let len = Math.max(len1, len2);

    if (len > (end - start)) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  // console.log("start: end: ", start, end);
  return s.slice(start, end + 1);
};


console.log(longestPalindrome("babad"));