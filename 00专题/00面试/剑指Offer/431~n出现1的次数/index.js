/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  let count = 0;
  for(let i=1;i<=n;i++) {
      let s = i.toString();
      if(!s.includes('1')) continue;
      for(let i =0;i<s.length;i++) {
          if(s[i]==1){
              count++;
          }
      }
  }
  return count;
};

console.log(countDigitOne(111231241))