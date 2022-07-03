/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {

  // for (let i = 0; i < nums.length; i++) {
  //   nums[i] = nums[nums[i]]
  // }
  return nums.map(elem => nums[elem])
  // console.log("nums: ", nums)
};

console.log(buildArray([0, 2, 1, 5, 3, 4]))