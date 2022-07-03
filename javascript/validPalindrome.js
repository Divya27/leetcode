/**
 * @param {string} s
 * @return {boolean}
 * 
 * https://leetcode.com/problems/valid-palindrome/
 * 
 */
var isPalindrome = function (s) {
  // length of string
  s = (s.replace(/([^0-9a-zA-Z])/ig, "")).trim().toLowerCase()
  if (s.length === 0) return true
  let j = s.length - 1
  console.log("j: ", j, j / 2)
  for (let i = 0; i < j / 2; i++) {
    console.log("s[i] : ", s[i])
    if (s[i] !== s[j - i]) {
      return false
    }
  }
  return true
};

console.log(isPalindrome("divya"))
// console.log(isPalindrome("abcba"))
// console.log(isPalindrome("A man, a plan, a canal: Panama"))


// str leng : 4, j = 3 