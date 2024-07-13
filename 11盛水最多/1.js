/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let res = 0;
  while (start < end) {
    res = Math.max(res, (end - start) * Math.min(height[end], height[start]));
    height[end] > height[start] ? start++ : end--;
  }
  return res;
};
maxArea([1, 1]);
