/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let max = 0;
  for (let i = 0, j = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], i);
      max = Math.max(max, map.size);
    } else {
      while (map.has(s[i])) {
        map.delete(s[j]);
        j++;
      }
      map.set(s[i], i);
    }
  }
  return max;
};
console.log(lengthOfLongestSubstring("abcabbb"));

/**
 * #### 方法一: Set

- 1.创建一个set

- 2.使两个指针指向字符串的头部

- 遍历字符串，若set里面没有是s[i]，则添加s[i]到set里面，并更新maxLeng

- 若set里面已经存在s[i]，则需要删除s[j], 并且将j向后移动(j++)，直到set里面不包含s[i]为止，**再添加s[i]到set里面**

- 返回maxLength
 */
