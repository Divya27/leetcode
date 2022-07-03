/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  const nums = []
  const allWords = s.split(" ")
  let isSorted = true
  console.log("all words:", allWords)
  for (let i = 0; i < allWords.length; i++) {
    if (!isNaN(allWords[i])) {
      if (nums.length > 0) {
        if (nums[nums.length - 1] < allWords[i]) nums.push(parseInt(allWords[i]))
        else {
          isSorted = false
          break
        }
      } else if (nums.length === 0) nums.push(parseInt(allWords[i]))
    }
  }
  console.log("nums:", nums)
  return isSorted
};

// console.log(areNumbersAscending("1 box has 3 blue 3 red 6 green and 12 yellow marbles"))
console.log(areNumbersAscending("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"))