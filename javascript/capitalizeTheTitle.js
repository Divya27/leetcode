/**
 * @param {string} title
 * @return {string}
 * 
 * https://leetcode.com/problems/capitalize-the-title/
 */
var capitalizeTitle = function (title) {
  let allWords = title.split(" ")
  allWords = allWords.map(word => {
    if (word.length <= 2) return word.toLowerCase()
    else return word[0].toUpperCase() + word.substring(1).toLowerCase()
  })
  console.log("allwords: ", allWords)
  return allWords.join(" ")
};

console.log(capitalizeTitle("capiTalIze tHe titLe"))
console.log(capitalizeTitle("First leTTeR of EACH Word"))
console.log(capitalizeTitle("i lOve leetcode"))