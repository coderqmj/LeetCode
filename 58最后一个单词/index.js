// let str = "hello world"
// let str1 = "hello"
// if(str1.includes(" ")) {
//   console.log(str.split(" ")[str.split(" ").length -1].length)
// }else{
//   console.log(0)
// }
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function(s) {
//   var i = 1;
//   if(s.includes(" ")) {
//     while(true) {
//       if(s.split(" ")[s.split(" ").length -i]) {
//         return s.split(" ")[s.split(" ").length -i].length
//       }
//       i++;
//     }
//   }
//   if(s){
//     return s.length
//   }
//   return 0
// };
var lengthOfLastWord = function(s) {
  let arr = s.split(' ')
  for(let i = arr.length-1;i>=0;i--) {
    if(arr[i]) {
      return arr[i].length
    }
  }
  return 0
};
console.log(lengthOfLastWord(" a"))