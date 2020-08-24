/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let up = false;
  let down = false;
  for(let i = 1;i<A.length;i++){
    if(A[i]-A[i-1]>0){
      up = true
    }
    if(A[i]-A[i-1]<0){
      down = true
    }

    if(up && down){
      return false
    }
  }

  return true;
};

console.log(isMonotonic([1,2,2,3]))