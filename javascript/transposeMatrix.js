/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * 
 * https://leetcode.com/problems/transpose-matrix/
 * 
 */
var transpose = function (matrix) {
  console.log("matrix: ", matrix)
  let resultMatrix = new Array(matrix[0].length).fill(-1).map(() => new Array(matrix.length).fill(-1))
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      resultMatrix[j][i] = matrix[i][j]
    }
  }
  console.log("matrix: now : ", resultMatrix)
  return resultMatrix
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

/**
 * 1 2 3
 * 4 5 6
 * 7 8 9
 */