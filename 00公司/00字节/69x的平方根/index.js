/**
 * @param {number} x
 * @return {number}
 */


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

// 二分法
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if(x<2) return x;
  let left = 2, right = x/2 | 0;
  while(left <= right) {
      let mid = (left + right)/2 | 0;
      if(mid*mid < x){
          left = mid+1;
      }else if(mid*mid === x){
          return mid;
      }else {
          right = mid -1;
      }
  }
  return left-1;
};