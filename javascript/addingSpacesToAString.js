/**
 * 
 * https://leetcode.com/problems/adding-spaces-to-a-string/description/?envType=daily-question&envId=2024-12-03
 */

/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  if (spaces.length === 0) return s;
  let updatedStr = '';
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (i === spaces[j]) {
      updatedStr += ' ';
      j += 1;
    }
    updatedStr += s[i];
  }
  return updatedStr;
};

console.log(addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15]));
console.log(addSpaces("spacing", [0, 1, 2, 3, 4, 5, 6]));