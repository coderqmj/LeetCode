/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x<0) return false;
  let arr = [];
  while(x) {
    arr.push(x%10);
    x = Math.floor(x/10)
  }
  console.log(arr)
  let left = 0;
  let right = arr.length - 1;
  while(left<right) {
    if(arr[left++]!==arr[right--]) return false;
  }
  return true;
};

console.log(isPalindrome(12211))