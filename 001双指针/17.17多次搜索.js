/**
 * @param {string} big
 * @param {string[]} smalls
 * @return {number[][]}
 */
var multiSearch = function(big, smalls) {
  let j = 0;
  let i = 0;
  while(i<big.length){
    if(big[j]===smalls[i][j]){
      j++;
    }
  }
};