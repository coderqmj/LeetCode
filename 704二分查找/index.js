/**
 * https://leetcode.cn/problems/binary-search/description/
 * nums = [-1,0,3,5,9,12], target = 9 输出 4
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0; let right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) / 2 | 0;
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] === target) {
      return mid;
    } else {
      right = mid - 1;
    }
  }
  return -1
};

console.log(search([-1,0,3,5,9,12], 10))