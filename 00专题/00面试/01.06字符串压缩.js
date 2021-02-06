/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
  let newStr = '';
  let count = 1;
  for(let i =1;i<S.length;i++) {
    if(S[i] === S[i-1]) {
      count++
    }else {
      newStr += S[i-1] + count;
      count = 1;
    }
  }
  newStr += S[S.length-1] + count;
  return newStr.length >= S.length ? S : newStr
};

console.log(compressString("abbccd"))