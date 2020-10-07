/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let a = 0, b = 0, c = 0;
  for(let i = 0;i<nums.length;i++) {
      nums[i] === 0 && a++;
      nums[i] === 1 && b++;
      nums[i] === 2 && c++;
  }
  for(let i = 0;i<nums.length;i++) {
      if(i<a) {
          nums[i] = 0
      }
      else if(i<a+b) {
          nums[i] = 1
      }
      else if(i<a+b+c) {
          nums[i] = 2
      }
  }
};

console.log(sortColors([0,0,1,1,2,2])) 