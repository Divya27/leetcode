/**
 * https://leetcode.com/problems/minimize-xor/description/
 */

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function (num1, num2) {

  // need to dry run
  const s1 = num1.toString(2);
  const s2 = num2.toString(2);

  let one = 0;
  for (let i = 0; i < s2.length; i++) {
    if (s2[i] === '1') one++;
  }
  console.log("one: ", one);
  console.log("s1: ", s1)
  console.log("s2: ", s2)

  let s = '';
  for (let i = 0; i < s1.length; i++) {
    if ((s1[i] === '1' || s1.length - i <= one) && one > 0) {
      s += '1';
      one--;
    } else {
      s += '0';
    }
  }
  console.log("s: ", s);
  console.log("one: ", one);

  while (one > 0) {
    s += '1';
    one--;
  }

  return parseInt(s, 2);

  // function count1Bits(num) {
  //   const numBinary = num.toString(2);
  //   let count = 0;
  //   // iterate through
  //   for (let i = 0; i < numBinary.length; i++) {
  //     if (numBinary[i] % 2 === 1) {
  //       count += 1;
  //     }
  //   }
  //   console.log("No of 1 bits in num : ", count);
  //   return count;
  // }

  // const num2Bits = count1Bits(num2);
  // let minNum = num1;
  // console.log(num2Bits);
  // for (let i = num1; i >= 0; i--) {
  //   if (count1Bits(i) === num2Bits) {
  //     const numXOR = i ^ num1;
  //     minNum = Math.min(minNum, numXOR);
  //   }
  // }
  // console.log("minNum: ", minNum);
  // return minNum;
};

console.log(minimizeXor(3, 5));