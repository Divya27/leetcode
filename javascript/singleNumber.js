/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // keep track of occurences  
  // if (nums.length === 1) return nums[0]
  // let arrMap = {}

  // for (let i = 0; i < nums.length; i++) {
  //   if (!arrMap.hasOwnProperty(nums[i])) arrMap[nums[i]] = 1
  //   else arrMap[nums[i]] += 1
  // }
  // console.log("arrMap: ", arrMap)

  // let result
  // for (let [key, value] of Object.entries(arrMap)) {
  //   if (value === 1) {
  //     result = key
  //     break
  //   }
  // }
  // return result

  // bit manipulation
  // using XOR -> XOR of a number with itself is 0, and XOR of a num with 0 is itself 

  let xorResult = 0;
  // a ^ a = 0 --> the numbers appearing twice will cancel each other out
  for (let i = 0; i <= nums.length; i++) {
    xorResult = xorResult ^ nums[i];
  }
  return xorResult;

};

console.log(singleNumber([4, 1, 2, 1, 2]))