/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // let dataMap = new Map()

  // for (let i = 0; i < nums.length; i++) {
  //   const otherElem = target - nums[i]

  //   if (dataMap.hasOwnProperty(otherElem)) {
  //     return [i, nums.indexOf(otherElem)]
  //   }
  //   // add to map
  //   dataMap[nums[i]] = i
  //   console.log("dataMap: ", dataMap)
  // }

  // hashmap get set function - faster
  let dataMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i]

    if (dataMap.has(compliment)) {
      return [dataMap.get(compliment), i]
    }
    // add to map
    dataMap.set(nums[i], i)
    console.log("dataMap: ", dataMap)
  }
  return [];
};

console.log(twoSum([3, 11, 3, 3, 15], 6))