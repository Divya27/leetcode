/**
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&envId=leetcode-75
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let maxVowels = 0;
  let currentWindowVowelCount = 0;

  // first window
  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) currentWindowVowelCount += 1;
  }
  maxVowels = Math.max(maxVowels, currentWindowVowelCount);

  // slide the window and update count based on if char is vowel
  for (let i = k; i < s.length; i++) {
    if (isVowel(s[i])) {
      currentWindowVowelCount += 1;
    }
    if (isVowel(s[i - k])) {
      currentWindowVowelCount -= 1;
    }
    maxVowels = Math.max(maxVowels, currentWindowVowelCount);
  }
  return maxVowels;
};

function isVowel(ch) {
  // return ch.match(/[aeiou]/gi);
  return ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'
}

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("weallloveyou", 7));