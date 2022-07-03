/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let result = nums.map(elem => {
    return elem * elem
  })
  result = result.sort((a, b) => { return a - b })
  return result
};
console.log(sortedSquares([-4, -1, 0, 3, 10]))