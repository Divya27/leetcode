/**
 * https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/?envType=daily-question&envId=2025-01-06
 */

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  // brute force
  let answer = new Array(boxes.length).fill(0);
  for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < boxes.length; j++) {
      if (parseInt(boxes[j]) === 1) {
        answer[i] += Math.abs(i - j)
      }
    }
  }
  console.log("Answer: ", answer);
  return answer;

};

console.log(minOperations("110"));