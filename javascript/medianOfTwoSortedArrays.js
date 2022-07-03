/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArr = [...nums1, ...nums2]
  mergedArr = mergedArr.sort((a, b) => a - b)
  // console.log("mergedArr: ", mergedArr)
  const medianIndex = (mergedArr.length / 2)
  // console.log("medianIndex: ", medianIndex)
  if (medianIndex % 1 !== 0) {
    return mergedArr[parseInt(medianIndex)]
  } else return ((mergedArr[parseInt(medianIndex)] + mergedArr[parseInt(medianIndex) - 1]) / 2)
};

// console.log(findMedianSortedArrays([3], [-2, -1]))

console.log(findMedianSortedArrays([-2], [3, -1]))