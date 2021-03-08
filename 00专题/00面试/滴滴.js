function removeMin(str) {
  const map = new Map();
  let min = Infinity;
  for (let i = 0; i < str.length; i++) {
    if(map.has(str[i])) {
      map.set(str[i], map.get(str[i])+1);
    }else {
      map.set(str[i], 1);
    }
  }
  for(item of map.keys()) {
    min = Math.min(min, map.get(item))
  }

  for(let i = 0;i<str.length; i++) {
    if(map.get(str[i])=== min) {
      str= str.slice(0,i)+str.slice(i+1);
      i--;
    }
  }
  console.log(str, map, map.keys())
  return str;
}

console.log(removeMin('ababcc'))
