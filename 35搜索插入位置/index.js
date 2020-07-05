/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {
//   for (var i = 0, length = nums.length; i < length; i++) {
//       if (nums[i] === target || nums[i] > target) {
//           return i
//       }
//   }
//   return length
// };

// 二分查找
var searchInsert = function (nums, target) {
  let length = nums.length;
  let left = 0;
  let right = length - 1;
  if (nums[length - 1] < target) return length
  while (left < right) {
    mid = left + right >>> 1
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
};
console.log(searchInsert([1, 3, 5, 6], 2))