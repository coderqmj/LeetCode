/**
 * @param {string} s
 * @return {number}
 * 输入: "abcabcbb" => 3 abc最长
 * 思路：双指针 i,j，滑动窗口
 * i先往后数，如果s[i]在前面已经存在，先删除s[j],j++,直到删除到没有s[i]为止，在重新向后数s[i]
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let map = new Map();
  for (i = 0, j = 0; i < s.length; i++) {
    // 当map里面不存在s[i]，说明i走过来还没有重复的字母，则需要更新max
    if (!map.has(s[i])) {
      map.set(s[i], i);
      max = Math.max(max, map.size);
    } else {
      // 1.如果s[i]，已经存在map里面，说明前面有字母和s[i]重复了，需要停止更新max
      // 2.需要按照顺序删除map里面存放的字母，直到删除到没有s[i]为止，就可以重新计算max
      // 3.可以用j来记录和删除map里面删除的字母
      while (map.has(s[i])) {
        map.delete(s[j]);
        j++;
      }
      map.set(s[i], i);
    }
  }
  return max;
};
console.log(lengthOfLongestSubstring("pwwkew"));
