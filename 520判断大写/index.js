/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let arr = []
  for (let i = 0; i < word.length; i++) {
    if (word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90) {
      arr[i] = 1
    } else {
      arr[i] = 0
    }
  }
  let true1 = Array(word.length).fill(1)
  let true2 = Array(word.length).fill(0)
  let true3 = Array(word.length).fill(0)
  true3[0] = 1;


  console.log(arr, true1, true2, true3)
  if (arr.toString() == true1.toString() || arr.toString() == true2.toString() || arr.toString() == true3.toString()) {
    return true
  } else {
    return false
  }
};

console.log(detectCapitalUse("USA"))