/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */
var twoSum = function (numbers, target) {
  // array is sorted , only one output

  // using two pointers 
  let i = 0                       // 0th index of array (index of first elem of array)
  let j = numbers.length - 1      // last index of array (index of last elem of array)

  // loop until i and j crosses
  while (i !== j) {
    // if target sum is found return index by incrementing 1 -- as it is 1 Indexed array
    if (numbers[i] + numbers[j] === target) return [i + 1, j + 1]
    else if (numbers[i] + numbers[j] < target) i++
    else if (numbers[i] + numbers[j] > target) j--
  }
};

// console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 3, 4], 6))
console.log(twoSum([-1, 0], -1))