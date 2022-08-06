
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 * 
 * https://leetcode.com/problems/uncommon-words-from-two-sentences/
 */
var uncommonFromSentences = function (s1, s2) {
  s1 = s1.split(" ")
  s2 = s2.split(" ")
  const combinedArr = [...s1, ...s2]
  const countMap = {}
  const resultArr = []
  for (let elem of combinedArr) {
    if (!countMap.hasOwnProperty(elem)) {
      // resultArr.push(elem)
      countMap[elem] = 1

    } else countMap[elem] += 1
  }
  console.log("count ; ", countMap)
  for (let [key, value] of Object.entries(countMap)) {
    console.log(key, value)
    if (value === 1) resultArr.push(key)
  }
  console.log("resultArr: ", resultArr)
  // for (let elem of s2) {
  //   if (!s1.includes(elem) && !resultArr.includes(elem)) resultArr.push(elem)
  // }
  return resultArr
};


console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"))
// console.log(uncommonFromSentences("apple apple", "banana"))