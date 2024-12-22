/**
 * https://leetcode.com/problems/watering-plants/description/
 */


/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
  let totalSteps = 0;
  let water = capacity;
  for (let i = 0; i < plants.length; i++) {
    if (plants[i] > water) {
      totalSteps += (i*2);  // to and fro
      water = capacity;
    }
    totalSteps += 1;
    water -= plants[i];
  }
  console.log("totalSteps: ", totalSteps);
  return totalSteps;
};

console.log(wateringPlants([2, 2, 3, 3], 5));