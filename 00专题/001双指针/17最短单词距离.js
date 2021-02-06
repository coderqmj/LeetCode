/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function (words, word1, word2) {
  let min;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      for (let j = i + 1; j < words.length; j++) {
        if (words[j] === word2) {
          // if(min) {
          //   min = Math.min(min,j-1)
          // }
          min = min ? Math.min(min, j - i) : j - i
          if (min === 1) return min
        }
      }
    }
    if (words[i] === word2) {
      for (let j = i + 1; j < words.length; j++) {
        if (words[j] === word1) {
          min = min ? Math.min(min, j - i) : j - i
          if (min === 1) return min
        }
      }
    }
  }
  return min
};
console.log(findClosest(["I", "am", "a", "student", "from", "a", "university", "in", "a", "city"], "a", "student"))