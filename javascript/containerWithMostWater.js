/**
 * https://leetcode.com/problems/container-with-most-water/description/
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // area = width * height
  // width = right - left 
  // height = shorter of two heights
  let left = 0;
  let right = height.length - 1;
  let maximumArea = 0;
  while (left <= right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    if (area > maximumArea) maximumArea = area;
    if (height[left] < height[right]) left++;
    else right--;
  }
  return maximumArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))