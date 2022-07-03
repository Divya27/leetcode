/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 * 
 * https://leetcode.com/contest/weekly-contest-294/problems/percentage-of-letter-in-string/
 */
var percentageLetter = function (s, letter) {
  let letterCount = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === letter) letterCount += 1
  }
  let percent = Math.floor(letterCount * 100 / s.length)
  console.log("percent: ", percent)
  return percent
};

console.log(percentageLetter("foobar", 'o'))