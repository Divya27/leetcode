/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * https://leetcode.com/problems/valid-anagram/
 */
var isAnagram = function (s, t) {
  s = s.split("").sort().join("")
  t = t.split("").sort().join("")
  return (s === t) ? true : false
};

console.log(isAnagram("anagram", "nagaram"))