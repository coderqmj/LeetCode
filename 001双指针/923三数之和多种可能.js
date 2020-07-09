/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (A, target) {
  let count = 0;
  for (let i =0; i < A.length - 2; i++) {
    for (let j = i+1; j < A.length - 1; j++) {
      for (let k = j+1; k < A.length; k++) {
        if (A[i] + A[j] + A[k] === target) {
          count++;
        }
      }
    }
  }
  return count
};

console.log(threeSumMulti([1,1,2,2,2,2], 5))