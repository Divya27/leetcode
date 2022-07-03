/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let pow = x ** n
  console.log("power: ", pow)
  return pow
};

console.log(myPow(2.1, 3))