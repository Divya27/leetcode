/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 * 
 * https://leetcode.com/problems/jewels-and-stones/
 */
var numJewelsInStones = function (jewels, stones) {
  let totalJewels = 0
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) totalJewels += 1
  }
  return totalJewels
};

console.log(numJewelsInStones("aA", "aAAbbbb"))