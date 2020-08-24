/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  let map = new Map()
  for(let i = 0;i<text.length;i++) {
    if("balloon".includes(text[i])){
      if(map.has(text[i])){
        let value = map.get(text[i]) +1
        map.set(text[i],value)
      }else{
        map.set(text[i],1)
      }
    }
  }

  if(map.get('b')&&map.get('a')&&map.get('l')&&map.get('o')&&map.get('n')){
    return Math.min(map.get('b'),map.get('a'),Math.floor(map.get('l')/2),Math.floor(map.get('o')/2),map.get('n'))
  }
  return 0;
};

console.log(maxNumberOfBalloons("loonbalxballpoon"))