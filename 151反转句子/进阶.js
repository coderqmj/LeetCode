/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // 1.清除多余空格
  let current = 0;
  let len = 0;
  // q前一个字符是否空格
  let space = true;
  for(let i =0;i<s.length;i++) {
    if(s[i] !== ' ') {
      s[current] = s[i]
      current++;
      space = false;
    }else if(space === false) { // s[i]是空格，s[i-1]是非空格
      s[current++] = " ";
      space = true;
    }
  }
};

console.log(reverseWords("a good   example!"))

