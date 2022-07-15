/**
 * @param {string} sentence
 * @return {string}
 * 
 * https://leetcode.com/problems/goat-latin/
 */
var toGoatLatin = function (sentence) {
  sentence = sentence.split(" ")
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i].match(/^[aeiou]/gi)) {
      sentence[i] = (sentence[i] + 'ma') + 'a'.repeat(i + 1)
    } else {
      sentence[i] = (sentence[i].substring(1, sentence[i].length) + sentence[i][0] + 'ma') + 'a'.repeat(i + 1)
    }
  }
  return sentence.join(" ")
};

console.log(toGoatLatin("I speak Goat Latin"))