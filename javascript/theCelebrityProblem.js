/**
 * GFG
 * https://www.geeksforgeeks.org/problems/the-celebrity-problem/1?page=1&company=Google&sortBy=submissions
 * 
 * 0 1 1 0
 * 0 0 0 0  
 * 0 1 0 0
 * 1 1 0 0
 * 
 */


class Solution {
  // Function to find the celebrity.
  celebrity(mat) {
    // approach 1 -- nested 2 for loops maintaining 2 arrays for knowMe and IKnow - TC: O(N*N) SC: O(2N)
    // approach 2 -- elimination process using top and down pointer for the row - TC: O(N) SC: )(1)
    // PENDING
    //   let top = 0;
    //   let down = mat[0].length - 1;
    //   let celebrity;

    //   console.log(top, down)

    //   while (top < down) {
    //     // top knows down
    //     if (mat[top][down] === 1) {
    //       // so top cannot be a celebrity 
    //       top += 1;
    //     } else if (mat[down][top] === 1) {
    //       // down knows top, so down cannot be a celebrity
    //       down -= 1;
    //     } else {
    //       // either of them does not know each other - both 0 
    //       top -= 1;
    //       down -= 1;
    //     }
    //   }
    //   if (top > down) return -1;
    //   // otherwise if there is a celebrity - both top and down will be at same pointer (top = down)

    //   // loop through 
    //   for (let i = 0; i < mat[0].length - 1; i++) {
    //     if (i == top) continue;
    //     if (mat[top][i] === 0 && mat[i][top] === 1) {
    //       celebrity = i;
    //     } else return -1;
    //   }
    //   return celebrity;


    // another approach

    let n = mat.length;
    let candidate = 0;

    for (let i = 1; i < n; i++) {
      if (mat[candidate][i] === 1) {
        // candidate knows i, so candidate cannot be the celebrity
        candidate = i;
      }
    }

    // verify the candidate 
    for (let i = 0; i < n; i++) {
      if (i !== candidate) {
        // if candidate is the celebrity if 1 then [1,1] will be 0 
        // candidate should not know any other, but everyone should know candidate (if otherwise no celebrity)
        if (mat[i][candidate] === 0 || mat[candidate][i] === 1) {
          return -1;
        }
      }
    }
    return candidate;
  }
}

let Obj = new Solution();
// const result = Obj.celebrity([[0, 1, 0], [0, 0, 0], [0, 1, 0]])
const result = Obj.celebrity([[0, 1, 1, 0], [0, 0, 0, 0], [0, 1, 0, 1], [1, 1, 0, 0]])
console.log(result)
