/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let steps = 0
  while (num !== 0) {
    if (num % 2 === 0) num = num / 2
    else num -= 1
    steps += 1
  }
  console.log("steps: ", steps)
  return steps
};


// console.log(numberOfSteps(14))
console.log(numberOfSteps(123))

