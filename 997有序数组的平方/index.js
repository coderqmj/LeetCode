/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  A.forEach((item, index) => {
    A[index] = item*item;
  })
  return A.sort((a,b) => a-b)
};

console.log(sortedSquares([-4,-1,0,3,10]))