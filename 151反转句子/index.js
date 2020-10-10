/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr = s.split(' ')
  arr.reverse()
  for(let i=0;i<arr.length;i++) {
    if(arr[i]==="") {
      arr.splice(i,1)
      i--;
    }
  }
  console.log(arr)
  return arr.join(' ')
};

console.log(reverseWords("a good   example!"))

