/**
 * @param {number[]} height
 * @return {number}
 */

// 暴力解法
var maxArea1 = function(height) {
  if(height.length<2) return 0;
  let max = 0;
  for(i=1;i<height.length;i++) {
    for(let j =0;j<i;j++) {
      max = Math.max(max,(i-j)*Math.min(height[i],height[j]))
    }
  }
  return max
};

// 双指针
// 指向开始和结尾，求出面积后让较小的指针向中间移动
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while(left<right) {
    max = Math.max(max,(right-left)*Math.min(height[left],height[right]))
    height[left] > height[right] ? right-- : left++
  }
  return max
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))