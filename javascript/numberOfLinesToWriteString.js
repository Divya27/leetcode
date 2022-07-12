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
  const base = 'a'.charCodeAt(0)
  // console.log("base: ", base)
  let currentPixels = 0
  for (let i = 0; i < s.length; i++) {
    const width = widths[s.charCodeAt(i) - base]
    currentPixels += width
    // if (currentPixels === maxPixels) {
    //   lines += 1
    //   currentPixels = 0
    // }
    if (currentPixels > maxPixels) {
      currentPixels = width
      lines += 1
    }
    console.log("currentPixels: ", currentPixels)
  }
  // console.log("lines:", lines)
  return (currentPixels > 0) ? [lines + 1, currentPixels] : [lines, currentPixels]
};

// console.log(numberOfLines([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "abcdefghijklmnopqrstuvwxyz"))
// console.log(numberOfLines([4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "bbbcccdddaaa"))

console.log(numberOfLines([4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "bbbcccdddaaa"))
// console.log(numberOfLines([3, 4, 10, 4, 8, 7, 3, 3, 4, 9, 8, 2, 9, 6, 2, 8, 4, 9, 9, 10, 2, 4, 9, 10, 8, 2], "mqblbtpvicqhbrejb"))
