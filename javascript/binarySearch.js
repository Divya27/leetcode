/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * https://leetcode.com/problems/binary-search/
 */
var search = function (nums, target) {
  // let low = 0
  // let high = nums.length - 1
  // while (low < high) {
  //   let mid = low + Math.floor((high - low + 1) / 2)
  //   if (target < nums[mid]) high = mid - 1
  //   else low = mid
  // }
  // return (nums[low] === target) ? low : -1

  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9))