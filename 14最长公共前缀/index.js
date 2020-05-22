// ["flower","flow","flight"]
// var longestCommonPrefix = function(strs) {

// };
let strs = ["flower","flow","flight"]
for(let i = 0; i< strs.length-1;i++) {
  strs[i] = strs[i].split(" ")
}
console.log(strs)