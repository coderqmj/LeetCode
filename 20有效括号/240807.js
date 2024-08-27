/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const map = {
    '(': 0,
    ')': 0,
    '[': 1,
    ']': 1,
    '{': 2,
    '}': 2,
  }
  let list = [];
  for (const item of s) {
    if (item === '(' || item === '{' || item === '[') {
      list.push(item);
    } else {
      if (map[item] !== map[list.at(-1)]) {
        console.log('map[item]',item, map[item])
        console.log('map[list.at(-1)]',list.at(-1), map[list.at(-1)])
        return false
      } else {
        list.pop();
      }
    }
  }
  return !!!list.length
};

console.log(isValid("()[]{}"))