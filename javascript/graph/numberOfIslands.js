/**
 * https://leetcode.com/problems/number-of-islands/solutions/5608697/video-check-4-directions-bonus-solutions/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  let islands = 0;

  bfs = (r, c) => {
    const queue = [];
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    visited.add(`${r},${c}`);
    queue.push([r, c]);

    while (queue.length) {
      const [row, col] = queue.shift();

      for (let [dr, dc] of directions) {
        const newR = row + dr;
        const newC = col + dc;

        // non visited neighbors
        if (newR >= 0 && newC >= 0 && newR < rows && newC < cols && grid[newR][newC] === '1' && !visited.has(`${newR},${newC}`)) {
          queue.push([newR, newC]);
          visited.add(`${newR},${newC}`);
        }
      }
    }

  }

  // iterate through each cell to find the starting node for bfs
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // check if it is unvisited and is land
      if (!visited.has(`${i},${j}`) && grid[i][j] === '1') {
        // traverse using bfs to find and visit all nearby land 
        islands += 1;
        bfs(i, j);
      }
    }
  }

  return islands;
};

console.log(numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
]))

console.log(numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]))