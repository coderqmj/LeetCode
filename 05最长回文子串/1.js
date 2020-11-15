/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let start = 0, maxLength = 1;
  function spread(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if(right-left+1>maxLength) {
        maxLength = right - left + 1
        start = left;
      }
      left--;
      right++
    }
  }
  for(let i = 0;i<s.length;i++) {
    spread(i,i+1);
    spread(i-1,i+1);
  }

  return s.substring(start,start+maxLength)
};
console.log(longestPalindrome('cbbd'))