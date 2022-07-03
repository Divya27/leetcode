/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const reverseNum = Math.abs(x).toString().split('').reverse().join('');

  if (reverseNum > 2 ** 31) {
    return 0;
  }
  // console.log("reverseNum: ", reverseNum)
  return (x < 0) ? -reverseNum : reverseNum
};

console.log(reverse(-123))