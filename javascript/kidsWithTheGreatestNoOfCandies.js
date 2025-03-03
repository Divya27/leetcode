/**
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75
 */


/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  // approach 1 
  // let maxCandies = Math.max(...candies);
  // let result = []
  // for (const candy of candies) {
  //     if (candy + extraCandies >= maxCandies) result.push(true)
  //     else result.push(false)
  // }
  // return result;

  // approach 2 
  let maxCandies = candies[0];
  let result = [];
  for (let i = 1; i < candies.length; i++) {
    if (candies[i] > maxCandies) maxCandies = candies[i];
  }

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandies) result.push(true);
    else result.push(false);
  }
  return result;

};