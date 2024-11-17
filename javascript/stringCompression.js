/**
 * 
 * https://leetcode.com/problems/string-compression/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {

  // two pointers 
  if (chars.length === 1) return 1;
  const n = chars.length;
  let i = 0;
  let j = 0;

  // loop through
  while (i < n) {
    let currentChar = chars[i];
    let count = 0;

    // check for consecutive same chars
    while (i < n && chars[i] === currentChar) {
      count++;
      i++;
    }

    chars[j++] = currentChar;

    // count > 1 then push the count, it could be more than single digit
    if (count > 1) {
      const countStr = count.toString();
      for (let k = 0; k < countStr.length; k++) {
        chars[j++] = countStr[k];
      }
    }

  }
  chars = chars.slice(0, j)
  // console.log("Chars: ", chars);
  return (chars.length === n) ? n : chars.length;
};


// console.log(compress(["a", "a", "a", "b", "b", "c", "c", "c"])) // a3b2c3 = 6
// console.log(compress(["a"]))
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]))