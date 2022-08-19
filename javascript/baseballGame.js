/**
 * @param {string[]} ops
 * @return {number}
 * 
 * https://leetcode.com/problems/baseball-game/
 */
var calPoints = function (ops) {
  const currentStack = []
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'C') currentStack.pop()
    else if (ops[i] === 'D') currentStack.push(currentStack[currentStack.length - 1] * 2)
    else if (ops[i] === '+') currentStack.push((currentStack[currentStack.length - 1] + currentStack[currentStack.length - 2]))
    else currentStack.push(+ops[i])
    console.log("current stack: ", currentStack)
  }
  let result = 0
  for (let elem of currentStack) result += elem
  console.log("result: ", result)
  return result
};

console.log(calPoints(["5", "2", "C", "D", "+"]))
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]))