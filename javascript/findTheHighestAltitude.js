/**
 * https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  // first approach
  // const n = gain.length;
  // const altitude = new Array(n + 1).fill(0);

  // for (let i = 0; i < n; i++) {
  //   altitude[i + 1] = altitude[i] + gain[i];
  // }
  // console.log(altitude);
  // return Math.max(...altitude);

  // another approach
  let previousSum = 0;
  let maxAltitude = 0;

  for (let i = 0; i < gain.length; i++) {
    previousSum += gain[i];
    console.log("previousSum : ", previousSum);
    if (previousSum > maxAltitude) maxAltitude = previousSum;
  }
  console.log("max altitude: ", maxAltitude);
  return maxAltitude;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]))