/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  number = number.split("")
  let maxTillNow = 0
  let indexToRemove = 0

  for (let i = 0; i < number.length; i++) {
    let tempNum = JSON.parse((JSON.stringify(number)))
    if (tempNum[i] == digit) {
      tempNum.splice(i, 1)
      if (!maxTillNow || ((tempNum).join("") > maxTillNow)) {
        maxTillNow = tempNum.join("")
        indexToRemove = i
        console.log("maxTillNow: ", maxTillNow)
      }
    }
  }
  console.log("number indexToRemove: ", number, indexToRemove)
  number.splice(indexToRemove, 1)
  return number.join("")
};

console.log(removeDigit("1435445", "4"))
// console.log(removeDigit("1231", "1"))

