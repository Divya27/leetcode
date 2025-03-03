/**
 * https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/description/?envType=daily-question&envId=2025-01-08
 */


/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {

  const isPrefixAndSuffix = function (str1, str2) {
    const n1 = str1.length;
    const n2 = str2.length;
    if (n1 > n2) return false;
    if (str2.substring(0, n1) === str1 && str2.substring(n2 - n1) === str1) return true;
    else return false;
  };

  let count = 0;
  const n = words.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) count += 1;
    }
  }
  console.log("count: ", count);
  return count;
};


var isPrefixAndSuffix = function (str1, str2) {
  if (str1 > str2) return false;
  console.log(str1, str2, typeof str1, typeof str2);
  if (str2.startsWith(str1) && str2.endsWith(str1)) return true;
  else return false;
}

console.log(countPrefixSuffixPairs(["a", "aba", "ababa", "aa"]));