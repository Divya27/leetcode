/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  return Array(2).fill(nums).flat()
};

console.log(getConcatenation([1, 2, 3]))