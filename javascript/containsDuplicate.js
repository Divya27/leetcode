/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // keep track of occurences  
  // let arrMap = {}
  // let hasDuplicate = false
  // for (let i = 0; i < nums.length; i++) {
  //   if (!arrMap.hasOwnProperty(nums[i])) arrMap[nums[i]] = 1
  //   else {
  //     hasDuplicate = true
  //     break
  //   }
  // }
  // return hasDuplicate

  // another approach - using set
  const checked = new Set();
  for (let num of nums) {
    if (checked.has(num)) return true;
    else checked.add(num)
  }
  return false;

};

console.log(containsDuplicate([1, 2, 3, 4, 5, 13, 10, 9, 7]))