/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 * 
 * https://leetcode.com/problems/count-items-matching-a-rule/
 */
var countMatches = function (items, ruleKey, ruleValue) {
  // map index
  const ruleIndex = {
    type: 0,
    color: 1,
    name: 2
  }
  let indexToLook = ruleIndex[ruleKey]
  // let matchingCount = 0
  return items.reduce((acc, curr) => {
    // current will be actual current value from the array
    // check the value and compare it with requested rule value
    const value = curr[indexToLook]
    return (value === ruleValue) ? acc += 1 : acc
  }, 0)
  // matchingCount = acc
  // console.log("matching count: ", matchingCount)
};

console.log(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], 'color', 'silver'))
// console.log(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]], 'type', 'phone'))