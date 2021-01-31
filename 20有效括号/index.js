/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  if (s[0] === '(' || s[0] === '{' || s[0] === '[') {
    stack.push(s[0]);
  } else {
    return false;
  }
  for (let i = 1; i < s.length; i++) {
    const stackL = stack.length -1;
    if (stack[stackL] === '(' && s[i] === ')' ||
      stack[stackL] === '{' && s[i] === '}' ||
      stack[stackL] === '[' && s[i] === ']') {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length ? false : true;
};

console.log(isValid("[()]"))