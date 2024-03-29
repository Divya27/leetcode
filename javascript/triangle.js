/**
 * @param {number[][]} triangle
 * @return {number}
 * 
 * https://leetcode.com/problems/triangle/
 */
var minimumTotal = function (triangle) {
  let sum = triangle[0][0]
  console.log("initial sum : ", sum)
  let indexToLook = 0
  for (let i = 1; i < triangle.length; i++) {
    // for (let j = 0; j < triangle[i].length; j++) {
    // console.log("triangle[i][j]: ", triangle[i][j])
    // console.log("triangle[i][j + 1] :", triangle[i][j + 1])
    const minFromRow = Math.min(triangle[i][indexToLook], triangle[i][indexToLook + 1])
    sum += minFromRow
    indexToLook = (minFromRow === triangle[i][indexToLook]) ? indexToLook : indexToLook + 1

    // }
  }
  console.log("sum: ", sum)
  return sum
};

// console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))

console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]))

/**
 *    -1
 *   2  3
 * 1 -1  -3
 */