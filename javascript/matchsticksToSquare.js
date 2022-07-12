/**
 * @param {number[]} matchsticks
 * @return {boolean}
 * 
 * https://leetcode.com/problems/matchsticks-to-square/
 */
var makesquare = function (matchsticks) {
  // if there are less than 4 matchsticks then return false
  if (matchsticks && matchsticks.length < 4) return false

  // if the sum of length of all the matchsticks is not divisible by 4 then also return false
  const totalLength = matchsticks.reduce((acc, stick) => acc + stick, 0)
  console.log("Total length :", totalLength)
  if (totalLength % 4 !== 0) return false

  // length of each side must be 
  const eachSide = totalLength / 4

  // allocate matchsticks to different sides - so that it forms a square
  // sort the matchsticks array descending so that we could get matchstick with max length
  matchsticks = matchsticks.sort((a, b) => b - a)
  console.log("sorted!:", matchsticks)

  let hashSticks = new Map()
  for (let i = 0; i < 4; i++) {
    hashSticks[i] = matchsticks[i]
  }

  for (let i = 4; i < matchsticks.length; i++) {
    if (hashSticks[3] < eachSide && hashSticks[3] + matchsticks[i] === eachSide) {
      hashSticks[3] += matchsticks[i]
      i += 1
    }
    else if (hashSticks[2] < eachSide && (hashSticks[2] + matchsticks[i] === eachSide)) {
      hashSticks[2] += matchsticks[i]
      i += 1
    }
    else if (hashSticks[1] < eachSide && (hashSticks[1] + matchsticks[i] === eachSide)) {
      hashSticks[1] += matchsticks[i]
      i += 1
    }
    else if (hashSticks[0] < eachSide && (hashSticks[0] + matchsticks[i] === eachSide)) {
      hashSticks[0] += matchsticks[i]
      i += 1
    }
  }
  console.log("hashSticks now: ", hashSticks)
};



// console.log(makesquare([1, 1, 2, 2, 2]))
// console.log(makesquare([3, 3, 3, 3, 4]))
console.log(makesquare([10, 6, 5, 5, 5, 3, 3, 3, 2, 2, 2, 2]))