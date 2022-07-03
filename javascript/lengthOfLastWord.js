/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const strArr = (s.trim().split(" "))
  const word = strArr[strArr.length - 1]
  console.log(word.length)
  return word.length
}(" Hello  Hi There   ");