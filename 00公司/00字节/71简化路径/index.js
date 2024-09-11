/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = []
  let prev = '/'
  let str = ''
  for (let i = 0; i <= path.length; i++) {
      if (path[i] === '/' || i === path.length) {
          if (prev === '/') continue
          if (str === '.') {
              str = ''
          } else if (str === '..') {
              stack.pop()
          } else {
              stack.push(str)
          }
          str = ''
      } else {
          str += path[i]
      }
      prev = path[i]
  }
  let res = ''
  let item;
  while (item = stack.pop()) {
      res = res ? `${item}/${res}` : item
  }
  return `/${res}`
};