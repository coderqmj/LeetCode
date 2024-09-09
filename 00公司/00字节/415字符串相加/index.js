/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var addStrings = function (num1, num2) {
  while(num1.length > num2.length){
    num2 = '0'+num2
  }
  while(num1.length < num2.length){
    num1 = '0'+num1
  }
  let res = '';
  let up = 0;
  for(let i=num1.length -1;i>=0;i--){
    const sum = +num1[i]+ +num2[i] + up;
    res = sum%10 + res
    up = sum>9? 1:0
  }
  return up>0? '1'+res : res;

};
console.log(addStrings('1234','789'))

console.log(typeof(''+10), typeof(10+''))