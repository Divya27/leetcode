/**
 * @param {string} s
 * @return {number}
 * 
 * https://leetcode.com/problems/roman-to-integer/
 */
var romanToInt = function (s) {
  const romanIntMap = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }

  let intValue = 0
  for (let i = 0; i < s.length; i++) {
    (romanIntMap[s[i]] < romanIntMap[s[i + 1]]) ? intValue -= romanIntMap[s[i]] : intValue += romanIntMap[s[i]]
  }
  console.log("intValue: ", intValue)
  return intValue
};

console.log(romanToInt("MCMXCIV"))