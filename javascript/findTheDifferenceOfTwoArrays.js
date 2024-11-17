/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 * 
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/
 */
var findDifference = function (nums1, nums2) {
  // approach 1 
  // let nums1Updated = new Set(nums1)
  // let nums2Updated = new Set(nums2)
  // nums1.forEach(elem => { nums2Updated.delete(elem) })
  // nums2.forEach(elem => { nums1Updated.delete(elem) })
  // console.log("nums1, nums2: ", nums1, nums2)
  // return [[...nums1Updated], [...nums2Updated]]

  // approach 2 
  // convert to set - nums2 
  const set1 = new Set(nums1);    // [1,2,3]
  const set2 = new Set(nums2);    // [1,2]

  // iterate through nums1 and check the elems not there in set2
  const result1 = nums1.filter((elem) => !set2.has(elem));
  const result2 = nums2.filter((elem) => !set1.has(elem));

  return [[...new Set(result1)], [...new Set(result2)]];

};

// console.log(findDifference([1, 2, 3], [2, 4, 6]))
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]))