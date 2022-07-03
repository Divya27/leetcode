/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {
  let valueOfB = parseInt(b.join(""))
  console.log("valueOfB: ", valueOfB)
  let powResult = (a ** valueOfB) % 1337
  console.log("powResult: ", powResult)
  return powResult
};

console.log(superPow(2147483647, [2, 0, 0]))