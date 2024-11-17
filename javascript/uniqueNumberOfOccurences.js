/**
 * @param {number[]} arr
 * @return {boolean}
 * 
 * https://leetcode.com/problems/unique-number-of-occurrences/
 */
var uniqueOccurrences = function (arr) {
  // keep track of occurences of each elem in map
  // let occurMap = new Map()
  // for (let i = 0; i < arr.length; i++) {
  //   if (!occurMap.hasOwnProperty(arr[i])) occurMap[arr[i]] = 1
  //   else occurMap[arr[i]] += 1
  // }
  // console.log("occur map: ", occurMap)
  // let result = true
  // let resultArr = []
  // for (let [elem, val] of Object.entries(occurMap)) {
  //   if (!resultArr.includes(val)) resultArr.push(val)
  //   else result = false
  // }
  // console.log("resultArr: ", resultArr)
  // return result


  let occurencesMap = new Map();
  for (let elem of arr) {
    occurencesMap.set(elem, (occurencesMap.get(elem) || 0) + 1);
  }

  let frequencySet = new Set();
  for (let count of occurencesMap.values()) {
    if (frequencySet.has(count)) return false;    // count exists, so not unique so 
    frequencySet.add(count)
  }
  return true;      // all counts unique
};

// console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]))