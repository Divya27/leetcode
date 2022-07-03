/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const strArr = s.split("")
  console.log("strArr: ", strArr)
  let vowels = []
  for (let i = 0; i < strArr.length; i++) {
    console.log("processing -- ", strArr[i])
    if (strArr[i] == strArr[i].match(/[aeiou]/i)) {
      console.log("vowel found:!", strArr[i])
      vowels.push(strArr[i])
    }
  }
  for (let i = 0, j = vowels.length; i < strArr.length; i++) {
    if (strArr[i] == strArr[i].match(/[aeiou]/i)) {
      console.log("j: ", j, vowels[j])
      strArr[i] = vowels[--j]
    }
  }
  return strArr.join("")
};

console.log(reverseVowels("Hello"))