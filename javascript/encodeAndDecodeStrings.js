/**
 * https://leetcode.com/problems/encode-and-decode-strings/description/
 * https://neetcode.io/problems/string-encode-and-decode
 */

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encoded = "";
    for (let str of strs) {
      encoded += `${str.length}#${str}`
    }
    console.log("encoded : ", encoded)
    return encoded;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let decoded = [];
    let i = 0;
    // iterate through the entire encoded string
    while (i < str.length) {
      // find the length first 
      let j = i;
      while (str[j] !== '#') {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      // console.log("LEngth: ", length)
      // get past the #
      i = j + 1;

      // decode the word
      decoded.push(str.substring(i, i + length));
      i += length;
    }
    console.log("decoded: ", decoded);
    return decoded;
  }
}


const obj = new Solution();
const encodedStr = obj.encode(["neet", "code", "love", "you"])
console.log(obj.decode(encodedStr))