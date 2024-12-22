/**
 * https://leetcode.com/problems/minimum-path-sum/description/?envType=problem-list-v2&envId=55ac4kuc
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // m define the rows
  const m = grid.length;
  // n define the columns
  const n = grid[0].length;

  // initialize dp array to store the min path
  const dp = new Array(n).fill(0);
  dp[0] = grid[0][0];

  // store the path sum for the first row 
  for (let j = 1; j < n; j++) {
    // need to consider left side cell 
    dp[j] = dp[j - 1] + grid[0][j];
  }

  // process remaining rows, for the first column need to only consider top element 
  for (let i = 1; i < m; i++) {
    // process the 1st column cells 
    dp[0] += grid[i][0];

    // check for the remaining columns
    for (let j = 1; j < n; j++) {
      dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
    }
  }

  return dp[n - 1];

};


console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));