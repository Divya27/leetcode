/**
 * @param {number[][]} image
 * @return {number[][]}
 * 
 * https://leetcode.com/problems/flipping-an-image/
 */
var flipAndInvertImage = function (image) {
  return image.map(a => { return a.reverse().map(b => b ^ 1) })
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]))