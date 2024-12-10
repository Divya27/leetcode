/**
 * https://leetcode.com/problems/combination-sum/description/
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {

  // Approach 1
  // const result = [];

  // // recursive function
  // function makeCombination(start, currentCombination, currentTotal) {
  //   if (currentTotal === target) {
  //     result.push([...currentCombination]);
  //     return;
  //   }

  //   if (currentTotal > target || start >= candidates.length) {
  //     return;
  //   }

  //   // include the current candidate in the combination and explore further
  //   currentCombination.push(candidates[start]);
  //   makeCombination(start, currentCombination, currentTotal + candidates[start]);

  //   // backtrack : remove the last added elem
  //   currentCombination.pop();

  //   // move to the next candidate
  //   makeCombination(start + 1, currentCombination, currentTotal);
  // }

  // makeCombination(0, [], 0);
  // return result;


  // Approach 2 
  const result = [];

  function backtrack(start, target, currentCombination) {
    if (target === 0) {
      result.push([...currentCombination]);
      return;
    }
    if (target < 0) return;

    for (let i = start; i < candidates.length; i++) {
      currentCombination.push(candidates[i]);
      // same index can be considered
      backtrack(i, target - candidates[i], currentCombination);
      //backtrack
      currentCombination.pop();
    }
  }
  backtrack(0, target, []);
  return result;

};

console.log(combinationSum([2, 3, 6, 7], 7));