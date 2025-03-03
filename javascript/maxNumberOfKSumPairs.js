/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// approach 1
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

// approach 2
// var maxOperations = function (nums, k) {
//   let map = new Map();
//   let count = 0;
//   for (let each of nums) {        // 1,2,3,4,2,3
//     if (map.has(each)) {          // 2
//       map.set(each, map.get(each) - 1);       // 2: 1, 2 : 0
//       map.get(each) == 0 && map.delete(each)  // 
//       count++;
//     } else {            
//       map.set(k - each, map.get(k - each) + 1 || 1);        // 4 : 1, 3 : 1, 2: 1, 4: 1
//     }
//   }
//   console.log("FINAL::::: ", map)
//   return count;
// }([1, 2, 3, 4], 5);




/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {

  nums.sort((a, b) => a - b);
  let ans = 0;
  let i = 0, j = nums.length - 1;
  while (i < j) {
    let total = nums[i] + nums[j];
    if (total === k) {
      i++;
      j--;
      ans++;
    } else if (total > k) {
      j--;
    } else {
      i++;
    }
  }
  return ans;
  // let count = 0;
  // let map = new Map();

  // let i = 0;
  // while (i < nums.length) {
  //   let num = nums[i];
  //   let complement = k - num;

  //   // check if complement exists in the map
  //   if (map.has(complement) && map.get(complement) > 0) {
  //     count += 1;
  //     map.set(complement, (map.get(complement) || 0) + 1);

  //     // remove num from the array
  //     nums.splice(i, 1);
  //     i--;    // as elem got removed

  //     // remove complement as well
  //     const complementIndex = nums.indexOf(complement);
  //     if (complementIndex !== -1) {
  //       nums.splice(complementIndex, 1);
  //       i--;
  //     }
  //   } else {
  //     map.set(num, (map.get(num) || 0) + 1);
  //     i++;
  //   }

  // }
  // // console.log("nums: ", nums);
  // // console.log(count);
  // return count;

};
console.log(maxOperations([1, 2, 3, 4], 5));
console.log(maxOperations([3, 1, 3, 4, 3], 6));