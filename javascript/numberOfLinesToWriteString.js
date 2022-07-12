/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 * 
 * https://leetcode.com/problems/number-of-lines-to-write-string/
 */
var numberOfLines = function (widths, s) {
  let lines = 0
  const maxPixels = 100
  let currentPixels = 0
  for (let i = 0; i < s.length; i++) {
    currentPixels += widths[i]
    if (currentPixels === maxPixels) {
      lines += 1
      currentPixels = 0
    }
    if (currentPixels > maxPixels) {
      currentPixels = widths[i]
      lines += 1
    }
  }
  // console.log("lines:", lines)
  return (currentPixels > 0) ? lines + 1 : lines
};

// console.log(numberOfLines([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "abcdefghijklmnopqrstuvwxyz"))
console.log(numberOfLines([4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "bbbcccdddaaa"))