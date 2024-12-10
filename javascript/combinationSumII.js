/**
 * 
 * https://leetcode.com/problems/combination-sum-ii/description/
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];

  candidates.sort((a, b) => a - b); // Sort the array to handle duplicates
  
  function backtrack(start, target, currentCombination) {
    if (target === 0) {
      result.push([...currentCombination]);
      return;
    }
    if (target < 0) return;

    for (let i = start; i < candidates.length; i++) {
      // Skip duplicates
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      currentCombination.push(candidates[i]);
      // use next index 
      backtrack(i + 1, target - candidates[i], currentCombination);
      currentCombination.pop();
    }

  }
  backtrack(0, target, []);
  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));