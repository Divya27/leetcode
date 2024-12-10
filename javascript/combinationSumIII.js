/**
 * https://leetcode.com/problems/combination-sum-iii/description/
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  // 1 to 9 allowed
  const result = [];

  function backtrack(start, target, currentCombination) {
    if (target == 0 && currentCombination.length == k) {
      result.push([...currentCombination]);
      return;
    }

    if (target < 0 || currentCombination.length > k) return;

    for (let i = start; i <= 9; i++) {
      currentCombination.push(i);
      backtrack(i + 1, target - i, currentCombination);
      currentCombination.pop();
    }

  }
  backtrack(1, n, []);
  return result;
};

console.log(combinationSum3(3, 7));