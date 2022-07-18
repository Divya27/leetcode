/**
 * @param {string} s
 * @return {number}
 * 
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 */
var firstUniqChar = function (s) {

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
  }
  return -1

};

// console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))