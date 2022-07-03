/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false
  let temp, rem, final = 0

  temp = x
  while (x > 0) {
    rem = x % 10
    x = parseInt(x / 10)
    final = final * 10 + rem
  }
  if (final === temp) return true
  else return false
};

console.log(isPalindrome(12121))