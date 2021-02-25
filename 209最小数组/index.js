/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// 暴力解法
var minSubArrayLen = function(target, nums) {
  let min = Infinity;
  let sum = 0;
  for(let i =0;i<nums.length;i++) {
      sum = nums[i];
      if(sum>=target) return 1;
      for(let j =i+1;j<nums.length;j++) {
          sum += nums[j];
          if(sum>=target){
              min = Math.min(min, j-i+1);
              continue;
          }
      }
  }
  return min !== Infinity ? min : 0;
};

// 滑动窗口 推荐
const minSubArrayLen = (s, nums) => {
  let minLen = Infinity;
  let i = 0;
  let j = 0;
  let sum = 0;
  while (j < nums.length) {   // 主旋律是扩张，找可行解
    sum += nums[j];
    while (sum >= s) {        // 间歇性收缩，优化可行解
      minLen = Math.min(minLen, j - i + 1);
      sum -= nums[i];
      i++;
    }
    j++;
  }
  return minLen === Infinity ? 0 : minLen; // 从未找到可行解，返回0
};

