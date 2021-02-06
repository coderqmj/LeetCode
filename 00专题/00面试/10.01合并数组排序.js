/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
  A = A.concat(B)
  A = A.sort((a,b)=> a -b)
  console.log(A)

};

console.log(merge([1,2,4],3,[2,3,4],3))