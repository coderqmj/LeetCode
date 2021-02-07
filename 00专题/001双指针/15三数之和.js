/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if(nums[i]>0) return res;
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        if (nums[i] + nums[left] + nums[right] === 0) {
          res.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) {
            left++
          }
          while (left < right && nums[right] === nums[right + 1]) {
            right--
          }
        } else if (nums[i] + nums[left] + nums[right] < 0) {
          left++;
        } else {
          right--;
        }
      }
    }

  }
  return res;
};
console.log(threeSum([-1,0,1,0]))
// [ -4, -1, -1, 0, 1, 2 ]