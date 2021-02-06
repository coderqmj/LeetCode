/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  while (x) {
    result = result * 10 + x % 10;
    x = (x / 10) | 0;
  }

  return (result | 0) === result ? result : 0;
}


console.log((2.6 | 0))
console.log((12314234252553411.4 | 0))
console.log(123123111111111 | 0)
