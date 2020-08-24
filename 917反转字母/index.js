/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  let arr = S.split('')
  let l = 0;
  let r = arr.length -1;
  while(l<=r){
    if(!((arr[l].charCodeAt()<=90 && arr[l].charCodeAt()>=65) || arr[l].charCodeAt()>=97 && arr[l].charCodeAt()<=122)){
      l++;
    }
    else if(!((arr[r].charCodeAt()<=90 && arr[r].charCodeAt()>=65) || arr[r].charCodeAt()>=97 && arr[r].charCodeAt()<=122)){
      r--;
    }
    else{
      [arr[l],arr[r]] = [arr[r],arr[l]]
      l++;
      r--;
    }
    
  }
  return arr.join('')
};

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"))