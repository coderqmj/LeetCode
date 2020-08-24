/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  words.sort((a, b) => a.length - b.length)
  let res = []
  for (let i = words.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (words[i].includes(words[j])) {
        if (!res.includes((words[j]))){

          res.push(words[j])
        }
      }
    }
  }
  console.log(res, words)
  return res
};

stringMatching(["leetcoder", "leetcode", "od", "hamlet", "am"])