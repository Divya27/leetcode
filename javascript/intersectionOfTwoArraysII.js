/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const minLenArr = (nums1.length > nums2.length) ? nums2 : nums1
  let arrMap = new Map()
  for (let i = 0; i < minLenArr.length; i++) {
    if (arrMap.hasOwnProperty(minLenArr[i])) arrMap[minLenArr[i]] += 1
    else arrMap[minLenArr[i]] = 1
  }
  console.log("arrmap: before", arrMap)
  const resultantArr = []
  const biggerArr = (nums1.length > nums2.length) ? nums1 : nums2
  // check elem of bigger array for intersection
  for (let i = 0; i < biggerArr.length; i++) {
    if (arrMap.hasOwnProperty(biggerArr[i])) {
      arrMap[biggerArr[i]] -= 1
      resultantArr.push(biggerArr[i])
    }
  }
  console.log("arrmap: after", arrMap)
  console.log("resultantArr: ", resultantArr)
  return resultantArr
};

// console.log(intersect([2, 2], [1, 2, 3, 2]))
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))