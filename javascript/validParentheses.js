/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // approach 1
  // const bracketsMap = {
  //   '}': '{',
  //   ']': '[',
  //   ')': '('
  // }
  // const arrStack = []
  // if (s[0] === '}' || s[0] === ']' || s[0] === ')') return false
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] === '{' || s[i] === '[' || s[i] === '(') arrStack.push(s[i])
  //   else {
  //     if (arrStack[arrStack.length - 1] === bracketsMap[s[i]]) arrStack.pop()
  //     else arrStack.push(s[i])
  //   }
  // }
  // console.log("arrStack: ", arrStack)
  // if (!arrStack.length) return true
  // else return false

  // approach 2

  let arrStack = [];
  if ((s.length === 1) || (s[0] === '}' || s[0] === ']' || s[0] === ')')) return false;

  for (let i = 0; i < s.length; i++) {
    // opening bracket then push into the stack
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      arrStack.push(s[i])
    } else {
      // if stack is empty and closing bracket is encountered return false directly 
      if (!arrStack.length) return false;
      // closing bracket - then pop and check if the corresponding parentheses match
      const topElement = arrStack.pop();
      if ((topElement === '(' && s[i] !== ')')
        || (topElement === '{' && s[i] !== '}')
        || (topElement === '[' && s[i] !== ']')) return false;
    }
  }
  // console.log("arrStack: ", arrStack);

  return !arrStack.length;

};

// console.log(isValid('(({{[]}}))()[]{}'))
console.log(isValid('([]'))