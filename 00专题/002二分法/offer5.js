/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  if(nums[nums.length-1] === nums.length-1) {
      return nums.length
  }
  let left = 0;
  let right = nums.length -1;
  
  while (left<=right) {
    let mid = Math.ceil((left+right)/2)
    if(nums[mid]===mid) {
      left = mid + 1
    }else {
      right = mid - 1
    }
  }

  return left
};

console.log(missingNumber([1,2,3]))