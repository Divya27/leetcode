/**
 * 
 * https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // approach 1 
  const n = nums.length;
  // result array
  const result = new Array(n);

  // left product
  // left product of 1st elem will be 1, no elems on the left
  result[0] = 1;
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }
  console.log("result: left product: ", result)
  // calculate right product
  // right product of right most elem will be 1 
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;

};

console.log(productExceptSelf([1, 2, 3, 4]))