/**
 * https://leetcode.com/problems/string-matching-in-an-array/?envType=daily-question&envId=2025-01-07
 * 
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {

  let result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[j].indexOf(words[i]) !== -1) {
        result.push(words[i])
      }
    }
  }
  console.log(result);
  return [...new Set(result)];
};

console.log(stringMatching(["mass", "as", "hero", "superhero"]));
console.log(stringMatching(["leetcoder", "leetcode", "od", "hamlet", "am"]));