/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {

  s = actualString(s)
  t = actualString(t)
  if (s == t) return true
  else return false
};

actualString = function (str) {
  const strLength = str.length;
  let ans = "";
  let i = strLength - 1
  let backspace = 0;
  while (i >= 0) {
    if (str[i] == '#') {
      backspace++;
    }
    else {
      if (backspace == 0) {
        ans += str[i];
      }
      if (backspace > 0) backspace--;
    }
    i--;
  }
  return ans;
}
console.log(backspaceCompare("ab##", "c#d#"))