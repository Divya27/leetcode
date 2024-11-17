/**
 * https://leetcode.com/problems/removing-stars-from-a-string/description/?envType=study-plan-v2&envId=leetcode-75
 */



/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '*') stack.push(s[i])
    else stack.pop();
  }
  return stack.join('');
};


console.log(removeStars('leet**cod*e'))
console.log(removeStars('erase*****'))