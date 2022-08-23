/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 * 
 * https://leetcode.com/problems/rotate-string/
 */
var rotateString = function (s, goal) {
  return (goal + goal).indexOf(s) != -1 && s.length == goal.length
};

console.log(rotateString("abcde", "cdeab"))