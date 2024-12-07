/**
 * https://leetcode.com/problems/check-if-n-and-its-double-exist/?envType=daily-question&envId=2024-12-01
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let arrMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (arrMap.has(arr[i] * 2) || (arrMap.has(arr[i] / 2))) {
      return true;
    }
    arrMap.set(arr[i], i);
  }
  return false;
};

console.log(checkIfExist([7, 1, 14, 11]));