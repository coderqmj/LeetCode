/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  let arr = s.split(' ')
  let res = arr.length;
  for(let i =0;i<arr.length;i++){
    if(arr[i]==''){
      res--;
    }
  }
  return res;
};

console.log(countSegments("Hello, my name is John"))