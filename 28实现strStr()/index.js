/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      var count = 0;
      for (let j = 0; j < needle.length; j++) {
        if (haystack[j + i] === needle[j]) {
          count++
          console.log(count, i, j)
        }
        if (count === needle.length) return i
        else if (haystack.length - i < needle.length) return -1
      }
    }
  }
  return -1
};
console.log(strStr("mississippi", "pi"))