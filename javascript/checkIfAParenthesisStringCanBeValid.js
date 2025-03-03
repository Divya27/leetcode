/**
 * 
 * https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/?envType=daily-question&envId=2025-01-12
 */

/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
  /**
   * At no point should the maximum balance become negative (which would indicate an excess of closing parentheses).
     At the end of the string, the minimum balance should be zero, meaning the string can be balanced.
   */
  const n = s.length;
  if (n % 2 === 1) return false;
  let minBalance = 0;
  let maxBalance = 0;

  // These variables track the potential minimum and maximum possible balances at any point.
  for (let i = 0; i < n; i++) {
    const isOpening = (s[i] === '(');
    const isUnlocked = (locked[i] === '0');
    minBalance += (!isOpening || isUnlocked) ? -1 : 1;      // closing or is unlocked => -1
    maxBalance += (isOpening || isUnlocked) ? 1 : -1;       // opening or is unlocked => 1
    if (maxBalance < 0) return false;                       // closing ones are more
    minBalance = Math.max(minBalance, 0);
  }

  return minBalance === 0;

};

console.log(canBeValid("))()))", "010100"));
/**
 * ())))
 * 
 */