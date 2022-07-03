/**
 * @param {string[]} operations
 * @return {number}
 * 
 * https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
 */
var finalValueAfterOperations = function (operations) {
  let X = 0
  for (let ops of operations) {
    if (ops.charAt(1) === '+') X++
    else X--
  }
  console.log("X:", X)
  return X
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]))