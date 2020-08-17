/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let arr = []
  for (let i = 0; i < num.length; i++) {
    arr[i] = num[i]*1
    while (k > 0 && arr.length > 0 && num[i] * 1 >= arr[arr.length - 1]) {
      arr.pop()
      k--
    }
    if (num[i] * 1 !== 0 || arr.length !== 0) {
      arr.push(num[i] * 1)
    }

  }
  while(arr.length>0 && k> 0) {
    arr.pop()
    k--
  }
  return arr
}

console.log(removeKdigits('1432219', 3))