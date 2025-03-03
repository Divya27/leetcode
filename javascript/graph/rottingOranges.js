/**
 * https://leetcode.com/problems/rotting-oranges/description/?envType=study-plan-v2&envId=leetcode-75
 * 
 * BFS - level order traversal 
 * bcoz we need to find minimum time that it takes to rot all the oranges 
 * All the ones at same distance from rotten oranges will get rot altogether 
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const rows = grid.length;
  const columns = grid[0].length;
  // console.log("rows: columns: ", rows, columns);

  const queue = [];
  let freshOranges = 0;

  // directions for adjacent cells (up, right, down, left)
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  // BFS - so need to have the starting cell, it will be all the rotten ones

  // initialise queue with rotten oranges and also count fresh oranges
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        freshOranges += 1;
      }
    }
  }
  
  // check if no fresh oranges are there, none to be rot
  if (freshOranges === 0) return 0;

  let minutes = 0;
  // until queue is empty, process each cell and rot all the adjacent ones
  while (queue.length) {

    let size = queue.length;    // iterate through all
    let rotted = false;

    for (let i = 0; i < size; i++) {
      // pop the element from the queue - which holds position of cell
      const [x, y] = queue.shift();
      // check for all of its neighbors by adding direction positions 
      for (let [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;

        // check if it is valid index and also if it is fresh orange
        if (newX >= 0 && newY >= 0 && newX < rows && newY < columns && grid[newX][newY] === 1) {
          // rot this
          grid[newX][newY] = 2;
          queue.push([newX, newY]);
          freshOranges -= 1;
          rotted = true;
        }
      }
    }
    // if rotted in this iteration then increase the minutes
    if (rotted) minutes += 1;

    // if fresh oranges are not there now, exit
    if (freshOranges === 0) return minutes;

  }

  // if there are still fresh oranges left
  return -1;

};

console.log(orangesRotting([
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1]
]))