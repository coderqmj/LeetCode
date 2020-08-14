/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  let arr = Array(S.length).fill(0)
  for(let i =0;i<S.length;i++) {
    let code = S[i].charCodeAt()
    if((code<=90 && code>=65) || (code>=97 && code<=122)){
      let count = 0;
      for(let j =0;j<=S.length-1-i;j++) {
        let code2 = arr[j].charCodeAt()
        if((code2<65 || (code2>90 && code2<97)||code2>122) && code2 !==48 ){
          console.log('11111111111111111111111111')
          count++
        }
      }
      arr[S.length-i-1+count] = S[i]
      console.log(arr,S[i],S.length-i-1)
    }else {
      arr[i] = S[i]
      console.log(arr,S[i],i)
    }
  }

  return arr.join('')
};

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"))