/**
 * @param {string} command
 * @return {string}
 * 
 * https://leetcode.com/problems/goal-parser-interpretation/
 */
var interpret = function (command) {
  command = command.replaceAll("G", "G")
  command = command.replaceAll("()", "o")
  command = command.replaceAll("(al)", "al")
  console.log("command:", command)
  return command
};

console.log(interpret("G()()()()(al)"))