/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if(nums.length<1) return 0;
  let state = 'begin';
  let maxLength = 1;
  for(let i = 1;i<nums.length;i++) {
    switch (state) {
      case 'begin':
        if(nums[i]>nums[i-1]){
          maxLength++
          state = 'up'
        }else if(nums[i]<nums[i-1]){
          maxLength++;
          state = 'down'
        }
        break;
      case 'up':
        if(nums[i]<nums[i-1]){
          maxLength ++
          state = 'down'
        }
        break;
      case 'down':
        if(nums[i]>nums[i-1]){
          maxLength++
          state = 'up'
        }
        break;
    }
  }

  return maxLength;
};

console.log(wiggleMaxLength([1,7,4,9,2,5]))