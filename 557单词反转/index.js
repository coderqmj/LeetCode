/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr = s.split(" ");
  for(let i = 0; i<arr.length; i++) {
      arr[i] = arr[i].split("").reverse().join('');
  }
  let str = arr.join(' ');
  return str
};
console.log(reverseWords("Let's take LeetCode contest"))

// let arr = ['113','24123']
// arr[1].split("").reverse()
// console.log(arr[1])