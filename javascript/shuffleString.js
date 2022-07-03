/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 * 
 * https://leetcode.com/problems/shuffle-string/
 */
var restoreString = function (s, indices) {
  let str = new Array(s.length)
  for (let i = 0; i < indices.length; i++) {
    str[indices[i]] = s[i]
  }
  console.log("str: ", str)
  return str.join("")
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]))