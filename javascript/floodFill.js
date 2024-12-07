/**
 * https://leetcode.com/problems/flood-fill/description/
 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  // DFS approach (recursive)
  const originalColor = image[sr][sc];

  // if original color is same as new color, no need to change anything
  if (originalColor === color) return image;

  function dfs(r, c) {
    // validate 
    if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) return;

    // change the color 
    if (image[r][c] === originalColor) {
      // change the color 
      image[r][c] = color;
      // change the color of all of it's neighbour

      dfs(r - 1, c);  // top
      dfs(r, c + 1);  // right
      dfs(r + 1, c);  // bottom
      dfs(r, c - 1)   // left
    }
  }

  dfs(sr, sc);
  return image;

  // BFS approach (using queue)
  // const originalColor = image[sr][sc];
  // if (originalColor === color) return image;
  // let queue = [[sr, sc]];
  // let directionsDelta = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  // while (queue.length) {
  //   // fetch from queue
  //   const [r, c] = queue.shift();
  //   if (image[r][c] === originalColor) {
  //     image[r][c] = color;
  //     // check for neighbours

  //     for (let [dr, dc] of directionsDelta) {
  //       // prepare for new row and new column
  //       let newRow = r + dr;
  //       let newCol = c + dc;
  //       if (newRow >= 0 && newRow < image.length && newCol >= 0 && newCol < image[0].length) {
  //         queue.push([newRow, newCol]);
  //       }
  //     }
  //   }
  // }

  // return image;

};

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2));