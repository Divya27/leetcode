/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 * 
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/
 */
var findDifference = function (nums1, nums2) {
  let nums1Updated = new Set(nums1)
  let nums2Updated = new Set(nums2)
  nums1.forEach(elem => { nums2Updated.delete(elem) })
  nums2.forEach(elem => { nums1Updated.delete(elem) })
  console.log("nums1, nums2: ", nums1, nums2)
  return [[...nums1Updated], [...nums2Updated]]
};

console.log(findDifference([1, 2, 3], [2, 4, 6]))
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]))