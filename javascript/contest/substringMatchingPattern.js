/**
 * https://leetcode.com/contest/biweekly-contest-147/problems/substring-matching-pattern/
 */


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function (s, p) {
  const [prefix, suffix] = p.split('*');
  const startIndex = s.indexOf(prefix);
  const endIndex = s.lastIndexOf(suffix);
  if (startIndex === -1 || endIndex === -1) return false;
  console.log("prefix: ", prefix)
  if (!prefix && endIndex !== -1) return true;
  if (endIndex >= startIndex + prefix.length) { return true }
  return false;
};

console.log(hasMatch("leetcode", "ee*e"));
console.log(hasMatch("car", "c*v"));
console.log(hasMatch("luck", "u*"));
console.log(hasMatch("pep", "q*"));
console.log(hasMatch("ojjju", "*o"));
console.log(hasMatch("ckckkk", "ck*kc"));
console.log(hasMatch("kvb", "k*v"));

