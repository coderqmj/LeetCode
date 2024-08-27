// 暴力实现
var mySqrt = function (x) {
  let i = 0;
  while (i <= x) {
    if (i * i === x) {
      return i;
    } else if (i * i > x) {
      return i - 1;
    }
    i++;
  }
};