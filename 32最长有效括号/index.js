/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let stack = []
  let max = 0
  let count = 0
  let j = 0
  // if(!s) {
  //   return 0
  // }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i])
      j++
    }
    if(stack.length ===0 && s[i]===')') {
      count = 0
    }
    if (s[i] === ')' && stack[stack.length - 1] === '(') {
      stack.pop()
      count += 2
      // console.log('第'+i+'次',count)
      max = Math.max(count, max)
    }
  }
  return max
};
console.log(longestValidParentheses(')()()'))