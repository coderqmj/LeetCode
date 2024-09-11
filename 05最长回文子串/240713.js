/**
 * @param {string} s
 * @return {string}
 * "babad" => bab
 * 中间向两边延展遍历，分为单数回文和双数回文，单数回文，中间数字直接不用管
 *  expand(i - 1, i + 1);
    expand(i, i + 1);
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;
  let maxLen = 1;
  let start = 0;
  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLen) {
        maxLen = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expand(i - 1, i + 1);
    expand(i, i + 1);
  }
  return s.substring(start, maxLen + start);
};
console.log(longestPalindrome("bb"));
