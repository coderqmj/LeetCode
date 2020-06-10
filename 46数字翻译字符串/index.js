/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  let str = num.toString()
  let count = 1
  for (let i = 0; i < str.length-1; i++) {
    if(parseInt(str.substr(i,2)) < 26) {
      console.log(parseInt(str.substr(i,2)))
      count++
    }
  }
  return count
};
console.log(translateNum(12258))