/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 
 * https://leetcode.com/problems/merge-sorted-array/
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m);
  // console.log("spliced: ", nums1)
  var i = 0;
  var j = 0;

  while (j < nums2.length) {
    if (nums1[i] === undefined || nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      console.log("nums1 :::::", nums1)
      j++;
      i++;
    } else {
      i++;
    }
  }
  console.log("nums1: ", nums1)
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 0))

console.log(merge([1], 1, [], 0))

console.log(merge([0], 0, [1], 1))



/**
 * 
 * var merge = function (nums1, m, nums2, n) {
  if (m === 0 && n > 0 && nums2.length) return nums2.slice(0, n)
  else if (n === 0 && m > 0 && nums1.length) return nums1.slice(0, m)
  else if (m > 0 && n > 0) {
    nums1 = nums1.slice(0, m)
    nums1 = [...nums1, ...nums2].sort((a, b) => a - b)
    return nums1
  }
};
 */