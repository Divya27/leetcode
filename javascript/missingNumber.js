/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // normal approach
  // let totalSum = 0
  // for (let i = 0; i < nums.length; i++) {
  //   totalSum += nums[i]
  // }

  // // sum of n numbers in the series 
  // const actualSum = (nums.length * (nums.length + 1)) / 2
  // console.log("result: ", actualSum - totalSum)
  // return (actualSum - totalSum)

  // with bit manipulation

  let xor = 0;
  for (let i = 0; i <= nums.length; i++) {
    xor = xor ^ i;
  }
  for (let num of nums) {
    xor = xor ^ num;
  }
  return xor;

};

console.log(missingNumber([1, 0, 3]))