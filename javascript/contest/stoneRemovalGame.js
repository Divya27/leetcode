/**
 * 
 * https://leetcode.com/contest/biweekly-contest-144/problems/stone-removal-game/
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function (n) {
  if (n < 10) return false;
  if (n === 10) return true;
  let aliceTurn = false;
  let bobTurn = false;
  for (let i = 10; i <= n; i--) {
    if (i % 2 === 0) {
      aliceTurn = true;
      bobTurn = false;
    } else {
      bobTurn = true;
      aliceTurn = false;
    }
    n = n - i;
    console.log(n);
  }
  // console.log("outside: ", n)
  // console.log(aliceTurn)
  return aliceTurn;
};

console.log(canAliceWin(34))