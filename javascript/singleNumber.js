/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // keep track of occurences  
  if (nums.length === 1) return nums[0]
  let arrMap = {}

  for (let i = 0; i < nums.length; i++) {
    if (!arrMap.hasOwnProperty(nums[i])) arrMap[nums[i]] = 1
    else arrMap[nums[i]] += 1
  }
  console.log("arrMap: ", arrMap)

  let result
  for (let [key, value] of Object.entries(arrMap)) {
    if (value === 1) {
      result = key
      break
    }
  }
  return result
};

console.log(singleNumber([4, 1, 2, 1, 2]))