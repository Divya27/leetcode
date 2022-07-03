/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxConsecutive = 0
  let consecutiveCount = 0
  for (const num of nums) {
    if (num === 1) {
      consecutiveCount += 1
    } else {
      consecutiveCount = 0
    }
    if (consecutiveCount > maxConsecutive) {
      maxConsecutive = consecutiveCount
    }
  }
  console.log("maxConsecutive: ", maxConsecutive)
  return maxConsecutive
};
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))