/**
 * 
 * https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  if (i === s.length) {
    return true
  }

  // if subsequence is not found - even after entire t is traversed 
  return (i === s.length);

};

console.log(isSubsequence("abc", "ahbgdc"))