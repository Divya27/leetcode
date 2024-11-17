/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {

  // approach 1 
  // const strArr = s.split("")
  // console.log("strArr: ", strArr)
  // let vowels = []
  // for (let i = 0; i < strArr.length; i++) {
  //   console.log("processing -- ", strArr[i])
  //   if (strArr[i] == strArr[i].match(/[aeiou]/i)) {
  //     console.log("vowel found:!", strArr[i])
  //     vowels.push(strArr[i])
  //   }
  // }
  // for (let i = 0, j = vowels.length; i < strArr.length; i++) {
  //   if (strArr[i] == strArr[i].match(/[aeiou]/i)) {
  //     console.log("j: ", j, vowels[j])
  //     strArr[i] = vowels[--j]
  //   }
  // }
  // return strArr.join("")

  // approach 2 -- using 2 pointer
  const strArr = s.split('');
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let left = 0;
  let right = strArr.length - 1;
  while (left < right) {
    // if both are vowel 
    if (vowels.has(strArr[left]) && vowels.has(strArr[right])) {
      // swap 
      [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
      left++;
      right--;
    } else {
      // not vowel
      if (!vowels.has(strArr[left])) left++;
      if (!vowels.has(strArr[right])) right--;
    }
  }
  return strArr.join('');
};

console.log(reverseVowels("Hello"))