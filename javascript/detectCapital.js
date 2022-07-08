/**
 * @param {string} word
 * @return {boolean}
 * 
 * https://leetcode.com/problems/detect-capital/
 * 
 * All letters in this word are capitals, like "USA".
   All letters in this word are not capitals, like "leetcode".
   Only the first letter in this word is capital, like "Google".
 */
var detectCapitalUse = function (word) {
  let capitalLetterCount = 0
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) capitalLetterCount += 1
  }
  console.log("capital letter count:", capitalLetterCount)
  if (capitalLetterCount === word.length || capitalLetterCount === 0 || (capitalLetterCount === 1 && word[0] === word[0].toUpperCase())) return true
  else return false
};

/**
 * other solution
 * 
 * var detectCapitalUse = function(word) {
    return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase();
};

 */

// console.log(detectCapitalUse("FlaG"))
// console.log(detectCapitalUse("USA"))
// console.log(detectCapitalUse("g"))
console.log(detectCapitalUse("leetcode"))
