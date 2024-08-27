/**
 * 输入：x = 4
 * 输出：2
 */
var mySqrt = function (x) {
  if(x<2) return x;
  let left = 0; let right = x / 2 | 0;
  while(left<=right) {
    let mid = (left + right)/2 | 0;
    if(mid*mid<x) {
      left = mid+1;
    }else if(mid*mid===x) {
      return mid;
    }else {
      right = mid - 1;
    }
  }
  // 正好没有整数相等时，(left-1)^2是正好超过x的
  // 比如 x=8, 
  // 第一阶段 left = 0, right = 4， mid = 2, mid^2=4<x, left = mid + 1= 3
  // 第二阶段 mid = (left + right)/2 | 0 = (3+4)/2 | 0 = 3, mid^2 = 9,跳出while循环，所以答案是left-1 = 3-1=2
  return left - 1;
};