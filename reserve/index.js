// // 范围：Number.MIN_VALUE -- Number>MAX_VALUE
var reverse = function (x) {
  let result = 0, remainder = 0;
  let MIN_VALUE = Math.pow(-2, 31)
  let MAX_VALUE = Math.pow(2, 31)
  if (x > 0) {
    while (x) {
      remainder = x % 10;
      x = Math.floor(x / 10);
      result = result * 10 + remainder;
    }
    if (result > MAX_VALUE || result < MIN_VALUE) {
      return 0
    } else {
      return result
    }
  } else {
    x = -x
    while (x) {
      remainder = x % 10;
      x = Math.floor(x / 10);
      result = result * 10 + remainder;
    }
    if (result > MAX_VALUE || result < MIN_VALUE) {
      return 0
    } else {
      return -result
    }
  }
}

console.log(reverse(123))
// console.log(321 >2147483648)
