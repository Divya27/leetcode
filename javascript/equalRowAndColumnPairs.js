/**
 * https://leetcode.com/problems/equal-row-and-column-pairs/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const n = grid.length;
  let count = 0;
  const rowMap = new Map();

  for (let r = 0; r < n; r++) {
    const row = JSON.stringify(grid[r]);
    rowMap.set(row, (rowMap.get(row) || 0) + 1);
  }

  // for column
  for (let c = 0; c < n; c++) {
    const col = JSON.stringify(grid.map((elem) => elem[c]));
    // count update
    count += (rowMap.get(col) || 0);
  }
  console.log("count: ", count);
  return count;

};

console.log(equalPairs([3, 2, 1], [1, 7, 6], [2, 7, 7]));