/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const bracketsMap = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  const arrStack = []
  if (s[0] === '}' || s[0] === ']' || s[0] === ')') return false
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{' || s[i] === '[' || s[i] === '(') arrStack.push(s[i])
    else {
      if (arrStack[arrStack.length - 1] === bracketsMap[s[i]]) arrStack.pop()
      else arrStack.push(s[i])
    }
  }
  console.log("arrStack: ", arrStack)
  if (!arrStack.length) return true
  else return false
};

console.log(isValid('(({{[]}}))()[]{}'))