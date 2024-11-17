/**
 * 
 * https://leetcode.com/problems/remove-outermost-parentheses/description/?envType=problem-list-v2&envId=string&difficulty=EASY
 * 
 * 
 * A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

Input: s = "(()())(())"
Output: "()()()"

 */

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {

  // for closing braces - check counter is 0 or not after decrementing it
  // for opening braces - check counter is 0 or not before incrementing it
  let counter = 0;
  let result = '';
  for (const elem of s) {
    console.log(elem);
    if (elem === ')') counter -= 1;
    if (counter !== 0) result += elem;
    if (elem === '(') counter += 1;
  }
  console.log(result)
  return result;

};

const s = "(()())(())"
console.log(removeOuterParentheses(s))

