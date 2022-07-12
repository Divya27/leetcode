/**
 * @param {string} s
 * @return {string}
 * 
 * https://leetcode.com/problems/masking-personal-information/
 */
var maskPII = function (s) {
  if (s.includes("@")) {
    // email
    const splitEmail = s.toLowerCase().split("@")
    return `${splitEmail[0][0]}*****${splitEmail[0][splitEmail[0].length - 1]}@${splitEmail[1]}`
  } else {
    // phone number
    // replace non digit char with empty string
    s = s.replace(/\D/g, '')
    const last4Digit = s.slice(s.length - 4, s.length)
    console.log("last4Digit: ", last4Digit)
    // check length of number
    if (s.length === 10) return `***-***-${last4Digit}`
    else return `+${'*'.repeat(s.length - 10)}-***-***-${last4Digit}`
  }
};

// console.log(maskPII("LeetCode@LeetCode.com"))
console.log(maskPII("44-1(234)567-890"))