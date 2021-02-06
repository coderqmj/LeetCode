/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let i =0;
  let j =0;
  if(!s.length || !t.length) return false
  for(i;i<t.length;i) {
    if(t[i] === s[j]) {
      i++;
      j++;
    }else {
      i++
      console.log('else：',i)
    }
    if(j===s.length) {
      return true
    }
    console.log(i,j)
  }
  return false
};
console.log(isSubsequence('abc','ahbgdc'))