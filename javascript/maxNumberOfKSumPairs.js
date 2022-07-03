/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var maxOperations = function (nums, k) {
//   let sumMap = new Map()
//   for (let i = 0; i <= nums.length; i++) {
//     const currentNum = nums[i]    // 1, 2, 3
//     const otherNum = k - currentNum   // 4, 3, 2
//     if ((!sumMap.hasOwnProperty(otherNum)) || (sumMap.hasOwnProperty(otherNum) && sumMap[otherNum] !== i)) {
//       sumMap[nums[i]] = i         // 1: 0, 2: 1, 
//       // remove from current array

//     } else {
//       // from the array remove both 
//       nums.splice(i, 1)
//       const otherNumIndex = nums.indexOf(otherNum)
//       nums.splice(otherNumIndex, 1)
//     }
//     console.log(nums)
//   }
//   console.log("FINAL::::: ", nums)
// }([1, 2, 3, 4], 5);
var maxOperations = function (nums, k) {
  let map = new Map();
  let count = 0;
  for (let each of nums) {        // 1,2,3,4,2,3
    if (map.has(each)) {          // 2
      map.set(each, map.get(each) - 1);       // 2: 1, 2 : 0
      map.get(each) == 0 && map.delete(each)  // 
      count++;
    } else {            
      map.set(k - each, map.get(k - each) + 1 || 1);        // 4 : 1, 3 : 1, 2: 1, 4: 1
    }
  }
  console.log("FINAL::::: ", map)
  return count;
}([1, 2, 3, 4], 5);


