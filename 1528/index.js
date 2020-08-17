/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  let map = new Map()
  let result = []
  for(let i =0;i<s.length;i++) {
    map.set(indices[i],s[i])
  }
  for(let i =0;i<s.length;i++) {
    result.push(map.get(i))
  }

  return result.join('')
};

console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]))