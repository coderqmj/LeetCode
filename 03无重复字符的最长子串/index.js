/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set()
  let i = 0, j = 0, maxLenth = 0
  for (i; i < s.length; i++) {
    if(!set.has(s[i])) {
      set.add(s[i])
      maxLenth = Math.max(maxLenth, set.size)
    }else {
      while(set.has(s[i])) {
        set.delete(s[j])
        j++
      }
      set.add(s[i])
    }
  }
  return maxLenth
};
console.log(lengthOfLongestSubstring('abcabbb'))