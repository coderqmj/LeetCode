/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let x1 = x.toString(2).padStart(32,0);
  let y1 = y.toString(2).padStart(32,0);
  let count = 0;
  // padStart字符长度不够，自动补上
  for(let i =0;i<32;i++){
    if(x1[i]!==y1[i]){
      count++;
    }
  }
  return count;
};

console.log(hammingDistance(1,4))