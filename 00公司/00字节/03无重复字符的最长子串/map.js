/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxLength = 0;
  let map = new Map();
  for(let i =0,j=0;i<s.length;i++) {
      if(!map.has(s[i])) {
          map.set(s[i], i);
          maxLength = Math.max(maxLength, map.size);
      }else {
          while(map.has(s[i])) {
              map.delete(s[j]);
              j++;
          }
          map.set(s[i], i)
      }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"))