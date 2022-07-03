/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if ((i % 2 === 0 && nums[i] % 2 !== 0) || (i % 2 !== 0 && nums[i] % 2 === 0)) {
      let temp = nums[i]
      nums[i] = nums[i - 1]
      nums[i - 1] = temp
    }
  }
  console.log("nums:", nums)
  return nums
};

console.log(sortArrayByParityII([3, 1, 4, 2]))