/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  if (n < 1000) {
    return `${n}`
  }
  let result = [];
  let str = n.toString()
  // console.log(typeof str)
  let i = 0;
  let len = str.length;
  while (str[len - 1 - i]) {
    if (i > 2 && i % 3 === 0) {
      result.push('.')
    }
    result.push(str[len - 1 - i])
    i++
  }

  return result.reverse().join('')
};

console.log(thousandSeparator(1234567))