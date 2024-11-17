/**
 * @param {string} s
 * @return {boolean}
 * 
 * https://leetcode.com/problems/valid-palindrome/
 * 
 */
var isPalindrome = function (s) {

  // approach 1 
  // length of string
  // s = (s.replace(/([^0-9a-zA-Z])/ig, "")).trim().toLowerCase()
  // if (s.length === 0) return true
  // let j = s.length - 1
  // console.log("j: ", j, j / 2)
  // for (let i = 0; i < j / 2; i++) {
  //   console.log("s[i] : ", s[i])
  //   if (s[i] !== s[j - i]) {
  //     return false
  //   }
  // }
  // return true

  // approach 2
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;

};

var isAlphanumeric = function (char) {
  return /[a-zA-Z0-9]/.test(char);
}

console.log(isPalindrome("divya"))
// console.log(isPalindrome("abcba"))
// console.log(isPalindrome("A man, a plan, a canal: Panama"))


// str leng : 4, j = 3 