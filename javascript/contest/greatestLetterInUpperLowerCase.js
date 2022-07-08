/**
 * @param {string} s
 * @return {string}
 * 
 * https://leetcode.com/contest/weekly-contest-298/problems/greatest-english-letter-in-upper-and-lower-case/
 */
var greatestLetter = function (s) {
  s = s.split("").sort().reverse()
  console.log("s: ", s)
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) return ''
    else {
      if (s.includes(s[i].toUpperCase())) return s[i].toUpperCase()
    }
  }
};

console.log(greatestLetter("lEeTcOdE"))
console.log(greatestLetter("arRAzFif"))
console.log(greatestLetter("AbCdEfGhIjK"))