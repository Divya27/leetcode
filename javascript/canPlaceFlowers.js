/**
 * https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let counter = 0;
  const flowerbedLength = flowerbed.length;
  // check that the elem to the right and left are 0 and current elem is also 0
  // make sure to handle the condition for 1st and last elem of array
  for (let i = 0; i < flowerbedLength; i++) {
    if ((flowerbed[i] === 0) &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbedLength - 1 || flowerbed[i + 1] === 0)) {
      flowerbed[i] = 1;
      counter += 1;
    }
  }
  // if given n or more flowers are placed
  return counter >= n ? true : false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1))