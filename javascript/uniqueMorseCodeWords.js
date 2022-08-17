/**
 * @param {string[]} words
 * @return {number}
 * 
 * https://leetcode.com/problems/unique-morse-code-words/
 */
var uniqueMorseRepresentations = function (words) {
  const alphabetCode = {
    a: '.-', b: '-...', c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..', j: '.---', k: '-.-', l: '.-..', m: '--',
    n: '-.', o: '---', p: '.--.', q: '--.-', r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-', y: '-.--', z: '--..'
  }

  return new Set(words.map(word => word.split("").map(letter => alphabetCode[letter]).join(""))).size

};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))