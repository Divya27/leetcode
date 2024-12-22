/**
 * https://leetcode.com/problems/fruit-into-baskets/
 */

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let left = 0;
  let maxFruits = 0;
  let fruitCount = new Map();

  for (let right = 0; right < fruits.length; right++) {
    fruitCount.set(fruits[right], (fruitCount.get(fruits[right]) || 0) + 1);

    // if fruit count map size (i.e. type of fruit > 2) - shrink the window size, increase left pointer
    while (fruitCount.size > 2) {
      let leftFruit = fruits[left];
      // decrease the size
      fruitCount.set(leftFruit, (fruitCount.get(leftFruit) || 0) - 1);
      // if count gets to 0, remove type of this fruit from the map 
      if (fruitCount.get(leftFruit) === 0) {
        fruitCount.delete(leftFruit);
      }
      left += 1;
    }

    // update the max fruits count 
    maxFruits = Math.max(maxFruits, right - left + 1);
  }

  return maxFruits;
};

console.log(totalFruit([0, 1, 2, 2]));