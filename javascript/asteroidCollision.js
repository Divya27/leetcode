/**
 * https://leetcode.com/problems/asteroid-collision/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const result = [];

  for (let asteroid of asteroids) {
    let alive = true;

    while (alive && asteroid < 0 && result.length && result[result.length - 1] > 0) {
      // top element
      const top = result[result.length - 1];
      // if current asteroid is larger 
      if (Math.abs(asteroid) > top) result.pop();
      else if (Math.abs(asteroid) === top) {
        result.pop();
        alive = false;
      } else {
        // destroy the coming asteroid
        alive = false
      }
    }

    // if asteroid is alive - push to stack
    if (alive) result.push(asteroid)
  }
  return result;

};

console.log(asteroidCollision([5, 10, -5]))
console.log(asteroidCollision([8, -8]))
console.log(asteroidCollision([10, 2, -5]))