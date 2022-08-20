/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {

  let x = 0
  let y = 0

  for (let move of moves) {
    if (move === 'L') x--
    else if (move === 'R') x++
    else if (move === 'D') y--
    else if (move === 'U') y++
  }

  if (x === 0 && y === 0) return true
  else return false

};

console.log(judgeCircle("UD"))
console.log(judgeCircle("LL"))