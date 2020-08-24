/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  paragraph = paragraph.toLowerCase()
  paragraph = paragraph.split(' ')
  let res = '';
  let max = 0;
  let map = new Map()
  for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i].includes(',') || paragraph[i].includes('.') || paragraph[i].includes('?') || paragraph[i].includes('!')) {
      paragraph[i] = paragraph[i].slice(0, paragraph[i].length - 1)
    }
    if (map.has(paragraph[i])) {
      map.set(paragraph[i], map.get(paragraph[i]) + 1)
      
    } else {
      map.set(paragraph[i], 1)
    }
  }
  for (let i = 0; i < banned.length; i++) {
    map.delete(banned[i])
  }
  map.forEach((value,key)=>{
    if (max <value) {
      res = key
      console.log(res)
      max = value
    }
  })
  console.log(res,map,paragraph)
  return res
};

console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]))