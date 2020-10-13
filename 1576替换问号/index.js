/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
  let len = s.length;
  if(s[0] === '?') {
    let code = Math.ceil(Math.random()*26) + 97
    while(s[1].charCodeAt() === code) {
     code = Math.ceil(Math.random()*26) + 97
    }
    s = s.replace(s[0],String.fromCharCode(code))
  }
  for(let i =1;i<s.length-1;i++) {
    if(s[i] === '?') {
    let code = Math.ceil(Math.random()*26) + 96
      while(s[i-1].charCodeAt() === code ||s[i+1].charCodeAt() === code) {
        code = Math.ceil(Math.random()*26) + 96
      }
      s = s.replace(s[i],String.fromCharCode(code))

    }
  }
  if(s[s.length-1] === '?') {
    console.log(s)
    let code = Math.ceil(Math.random()*26) + 96
    console.log(code,s[s.length-2].charCodeAt())
    while(s[s.length-2].charCodeAt() === code) {
      code = Math.ceil(Math.random()*26) + 96
    }
    s = s.replace(s[s.length-1],String.fromCharCode(code))
    console.log(s)
  }
  return s
};

console.log(modifyString("???"))