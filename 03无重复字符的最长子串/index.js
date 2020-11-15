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

/**
 * #### 方法一: Set

- 1.创建一个set

- 2.使两个指针指向字符串的头部

- 遍历字符串，若set里面没有是s[i]，则添加s[i]到set里面，并更新maxLeng

- 若set里面已经存在s[i]，则需要删除s[j], 并且将j向后移动(j++)，直到set里面不包含s[i]为止，**再添加s[i]到set里面**

- 返回maxLength
 */