/**
 * https://leetcode.com/problems/simplify-path/description/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 */

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {

  const pathArr = path.split('/')
  console.log("path Arr: ", pathArr)

  const stack = [];

  for (let i = 0; i < pathArr.length; i++) {
    if (pathArr[i]) {
      if (pathArr[i] !== '..' && pathArr[i] !== '.') stack.push(pathArr[i]);
      else if (pathArr[i] === '..') stack.pop();
    }
  }
  console.log("stack: ", stack);
  console.log("stack joined: ", stack.join('/'))
  return `/${stack.join('/')}`

};

console.log(simplifyPath('/home/'))
// console.log(simplifyPath('/home//foo/'))
// console.log(simplifyPath('/home/user/Documents/../Pictures'))
// console.log(simplifyPath('/../'))
// console.log(simplifyPath('/.../a/../b/c/../d/./'))