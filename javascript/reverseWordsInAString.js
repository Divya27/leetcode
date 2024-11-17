/**
 * @param {string} s
 * @return {string}
 * 
 * https://leetcode.com/problems/reverse-words-in-a-string/
 * 
 */
var reverseWords = function (s) {
  // approach 1 : using built in functions
  // console.log(s.trim().split(" ").filter(elem => elem.trim().length > 0).reverse().join(" "))
  // return s.trim().split(" ").filter(elem => elem.trim().length > 0).reverse().join(" ")

  // approach - 2 without built in functions
  // const stackData = s.trim().split(' ');
  // console.log("stackData: ", stackData)

  // const ans = [];
  // while (stackData.length) {
  //   const word = stackData.pop().trim();
  //   if (word.length) ans.push(word)
  // }
  // return ans.join(' ');

  // approach 3 - in-place -> other way - to be tried : reverse the entire string, traverse - when space is encountered store the word in ans array
  // Convert string to an array (because strings are immutable)
  let arr = s.trim().split('');

  // Reverse the entire string
  reverse(arr, 0, arr.length - 1);

  let start = 0;

  // Reverse each word in the reversed string
  for (let i = 0; i <= arr.length; i++) {
    // console.log("arr[i] : ", arr[i])
    if (i === arr.length || arr[i] === ' ') {
      reverse(arr, start, i - 1);
      start = i + 1;
    }
  }

  // Convert the array back to a string and return
  return arr.join('').replace(/\s+/g, ' ').trim();

};

function reverse(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

console.log(reverseWords("a good   example"))
// console.log(reverseWords("the sky is blue "))