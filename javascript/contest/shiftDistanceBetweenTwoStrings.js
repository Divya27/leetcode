/**
 * https://leetcode.com/contest/biweekly-contest-144/problems/shift-distance-between-two-strings/description/
 */

/**
 * @param {string} s
 * @param {string} t
 * @param {number[]} nextCost
 * @param {number[]} previousCost
 * @return {number}
 */
var shiftDistance = function (s, t, nextCost, previousCost) {

  // pending

  let minDistance = 0;
  const totalChars = 26;

  for (let i = 0; i < s.length; i++) {
    console.log(s[i])
    console.log(s.charCodeAt(i), t.charCodeAt(i))
    const cost = Math.min(previousCost[i], nextCost[i])
    console.log(cost);
  }
};

console.log(shiftDistance("abab", "baba",
  [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

