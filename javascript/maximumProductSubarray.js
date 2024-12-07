/**
 * https://leetcode.com/problems/maximum-product-subarray/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // multiplying 2 neg nums can result into positive number
  // so need to keep a track of both min product and max product
  let minProd = nums[0];
  let maxProd = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {

    // if number is negative - swap min and max product : because multiplying a negative number by the minimum product could result in a large positive product.
    if (nums[i] < 0) {
      [maxProd, minProd] = [minProd, maxProd];
    }

    maxProd = Math.max(nums[i], nums[i] * maxProd);
    minProd = Math.min(nums[i], nums[i] * minProd);

    result = Math.max(result, maxProd);
  }
  return result;
};

console.log(maxProduct([2, 3, -2, 4]))