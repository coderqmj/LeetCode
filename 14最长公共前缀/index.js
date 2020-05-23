// ["flower","flow","flight"]
// var longestCommonPrefix = function (strs) {
//   let ans = strs[0]
//   console.log(ans.length)
//   if (ans.length === 0) return ""
//   for (let i = 1; i < strs.length; i++) {
//     var j = 0
//     for (; j < ans.length && j < strs[i].length; j++) {
//       console.log(ans.length)
//       if (ans[j] !== strs[i][j]) break;
//     }
//     ans = ans.substr(0, j)
//     if (ans === "") return ""
//   }
//   return ans;
// };
var longestCommonPrefix = function (strs) {
  if (!strs.length) return ""
  let index = 0, i
  while (index < strs[0].length) {
    n = 1;
    while (n < strs.length) {
      if (strs[n][index] !== strs[0][index]) {
        return strs[0].substr(0, index)
      }
      n++
    }
    index++
  }
  return strs[0]
}



let strs = ["aaa", "aa", "aaa"]
console.log(longestCommonPrefix(strs))
