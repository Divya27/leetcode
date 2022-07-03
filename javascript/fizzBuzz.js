/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let outputArr = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) outputArr.push("FizzBuzz")
    else if (i % 3 === 0 && i % 5 !== 0) outputArr.push("Fizz")
    else if (i % 5 === 0 && i % 3 !== 0) outputArr.push("Buzz")
    else if (i % 3 !== 0 && i % 5 !== 0) outputArr.push("" + i)
  }
  return outputArr
};

console.log(fizzBuzz(15))