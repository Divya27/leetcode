/**
 * @param {string} s
 * @return {boolean}
 */
var longestValidParentheses = function (s) {
  const bracketsMap = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  const arrStack = []
  let validPair = 0
  let groupOfValidPair = 0

  for (let i = 0; i < s.length; i++) {

    if (s[i] === '{' || s[i] === '[' || s[i] === '(') arrStack.push(s[i])
    else {
      if (arrStack[arrStack.length - 1] === bracketsMap[s[i]]) {
        arrStack.pop()
        groupOfValidPair += 1
      }
      else arrStack.push(s[i])
    }
    if (arrStack.length === 0) {
      validPair += groupOfValidPair
      groupOfValidPair = 0
    }
  }
  console.log("arrStack: ", arrStack)
  console.log("validPair: ", validPair)
  return validPair * 2
};

// console.log(longestValidParentheses('(({{[]}}))()[]{}'))
// console.log(longestValidParentheses(''))
console.log(longestValidParentheses('()(()'))
console.log(longestValidParentheses(')()())'))
// console.log(longestValidParentheses(')))(){}({[()]})('))