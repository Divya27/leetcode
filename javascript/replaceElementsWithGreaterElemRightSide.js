/**
 * @param {number[]} arr
 * @return {number[]}
 * 
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 */
var replaceElements = function (arr) {
  if (arr.length === 1) return [-1]
  let i = 0
  arr = arr.map(elem => {
    i++
    if (i === arr.length) return -1
    return Math.max(...arr.slice(i, arr.length))

  })
  console.log("arr: ", arr)
  return arr
};


console.log(replaceElements([400]))
console.log(replaceElements([17, 18, 5, 4, 6, 1]))