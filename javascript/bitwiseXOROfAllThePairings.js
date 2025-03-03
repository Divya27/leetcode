/**
 * https://leetcode.com/problems/bitwise-xor-of-all-pairings/description/?envType=daily-question&envId=2025-01-16
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
  // approach 1 -- taking more time
  // let xorResult;
  // for (let i = 0; i < nums1.length; i++) {
  //   for (let j = 0; j < nums2.length; j++) {
  //     xorResult = (xorResult !== undefined) ? xorResult ^ (nums1[i] ^ nums2[j]) : (nums1[i] ^ nums2[j]);
  //   }
  // }
  // console.log(xorResult);
  // return xorResult;

  // approach 2
  /**
   * If the length of one array is even, all XOR contributions from that array cancel out.
    If the length is odd, only the XOR of the elements of the other array matters.

    Calculate the XOR of all elements in nums1 (x1) and nums2 (x2).
    Check the lengths of nums1 and nums2:
    If the length of nums1 is odd, the XOR of nums2 contributes to the result.
    If the length of nums2 is odd, the XOR of nums1 contributes to the result.
    Return the combined result of these XOR operations.
   */

  const n1 = nums1.length;
  const n2 = nums2.length;
  let x1 = 0;
  let x2 = 0;
  // odd length array nums1, consider xor from nums2
  if (n1 % 2 !== 0) {
    for (let num of nums2) {
      x2 = x2 ^ num;
    }
  }
  // odd length array nums2, consider xor from nums1
  if (n2 % 2 !== 0) {
    for (let num of nums1) {
      x1 = x1 ^ num;
    }
  }

  return x1 ^ x2;

};

console.log(xorAllNums([2, 1, 3], [10, 2, 5, 0]));