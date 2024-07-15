/**
 * @param {string} s
 * @return {string}
 * 最长回文
 * abba => abba
 * abcb => bcb
 * 回文类型：单数回文，双数回文
 */
function longestPalindrome(s) {
  if (s.length < 2) return s;
  let max = 1;
  let start = 0;
  function getMaxLength(left, right) {
    let maxLen = 1;
    let ineerStart = 0;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      maxLen = right - left + 1;
      ineerStart = left;
      left--;
      right++;
    }
    if (max < maxLen) {
      max = maxLen;
      start = ineerStart;
    }
  }

  for (let i = 0; i < s.length; i++) {
    getMaxLength(i - 1, i + 1);
    getMaxLength(i, i + 1);
  }
  return s.substring(start, start + max);
}
longestPalindrome("bb");
