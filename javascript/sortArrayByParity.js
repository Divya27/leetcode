/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const oddArr = nums.filter(elem => elem % 2 !== 0)
  const evenArr = nums.filter(elem => elem % 2 === 0)

  const resultArr = [...evenArr, ...oddArr]
  console.log("resultArr: ", resultArr)
  return resultArr
};

console.log(sortArrayByParity([1,2,3,4]))