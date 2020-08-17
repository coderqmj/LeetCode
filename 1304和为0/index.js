/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let arr = []
  for(let i =0;i<n-1;i++){
    arr[i] = i;
  }
  let prevSum = (n-2)*(n-1)/2
  arr[n-1] = -prevSum

  return arr
};

console.log(sumZero(1))