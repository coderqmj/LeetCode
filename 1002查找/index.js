/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let arr = A[0].split('')
  for(let i =0;i<arr.length;i++){
    for(let j =1;j<A.length;j++) {
      let arr1 = A[j]
      if(!arr1.includes(arr[i])){
        arr.splice(i,1)
      }else {
        arr1 = arr1.replace(arr[i],0)
        console.log(arr1)
      }
    }
  }
  return arr
};
console.log(commonChars(["cool","lock","cook"]))