/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0
  for (const num of nums) {
    if (num.toString().length % 2 === 0) count += 1
  }
  console.log("count: ", count)
  return count
};
console.log(findNumbers([12, 345, 2, 6, 7896]))