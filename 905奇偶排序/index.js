/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let start = 0
  let end = A.length -1
  while(start<end) {
    if(A[start]%2===1&&A[end]%2 === 0) {
      [A[start],A[end]] = [A[end],A[start]]
      start++
      end--
    }
    if(A[start]%2===1&&A[end]%2===1) {
      end--
    }
    if(A[start]%2===0&&A[end]%2===1) {
      start ++
      end --
    }
    if(A[start]%2===0&&A[end]%2===0) {
      start ++
    }
  }
  return A
}
console.log(sortArrayByParity([1, 2, 3, 4]))

