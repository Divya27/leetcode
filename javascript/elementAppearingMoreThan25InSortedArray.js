/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  const arrMap = {}
  for (let i = 0; i < arr.length; i++) {
    if (!arrMap.hasOwnProperty(arr[i])) arrMap[arr[i]] = 1
    else arrMap[arr[i]] += 1
  }
  console.log("arrMap: ", arrMap)
  const requiredLen = arr.length / 4
  console.log("requiredLen: ", requiredLen)
  for (let [elem, value] of Object.entries(arrMap)) {
    if (value > requiredLen) return elem
  }
};

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]))
console.log(findSpecialInteger([1, 2, 3, 3]))