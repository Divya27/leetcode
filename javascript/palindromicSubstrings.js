/**
 * https://leetcode.com/problems/palindromic-substrings/
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  // COUNT
  let count = 0;

  function expandAroundCenter(left, right) {
    let palindromicCount = 0;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      palindromicCount++;
      left--;
      right++;
    }
    return palindromicCount;
  }

  for (let i = 0; i < s.length; i++) {
    count += expandAroundCenter(i, i);
    count += expandAroundCenter(i, i + 1);
  }
  return count;


  // if we want to returns the palindromic substrings array
  // let palindromes = [];

  // function expandAroundCenter(left, right) {
  //   while (left >= 0 && right < s.length && s[left] === s[right]) {
  //     palindromes.push(s.slice(left, right + 1));
  //     left--;
  //     right++;
  //   }
  // }

  // for (let i = 0; i < s.length; i++) {
  //   expandAroundCenter(i, i);
  //   expandAroundCenter(i, i + 1);
  // }
  // return palindromes;

};

console.log(countSubstrings("aa"));