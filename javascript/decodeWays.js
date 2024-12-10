/**
 * https://leetcode.com/problems/decode-ways/description/
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  // check for empty string 
  if (!s.length || s[0] === '0') {
    return 0;
  }

  // length of the string 
  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;      // if does not start with '0'

  for (let i = 2; i <= n; i++) {
    // check for single digit s[i-1]
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1];
    }

    // double digit
    const twoDigit = parseInt(s[i - 2] + s[i - 1], 10);
    if (twoDigit >= 10 && twoDigit <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];

};

console.log(numDecodings("12"));