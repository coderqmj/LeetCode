/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  if(A.length < 2) return false;
  if(A[0]>=A[1]) return false;
  let isMount = false;
  if(A[A.length-1]>=A[A.length-2]) return false;
  for (let i = 1; i < A.length; i++) {
    if(A[i-1]>=A[i] && A[i]<=A[i+1]) {
      console.log('1')
      return false
    }
    if(A[i]>A[i-1] && A[i]>A[i+1]) {
      isMount = !isMount;
    }
  }
  return isMount
};

console.log(validMountainArray([0,1,2,4,2,1]))