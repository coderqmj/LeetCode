/**
 * 题目：https://leetcode.cn/problems/search-in-rotated-sorted-array/description/
 * 思路：和153寻找旋转排序数组中的最小值类似，找到确定排序的那一段数组进行二分查找
 * 1.left = 0; right = nums.length -1; 注意判断条件while(left <= right)
 * 2.mid = (left + right) / 2 | 0，如果nums[mid]===target，则立即返回mid
 * 3.如果nums[mid] < nums[right]，就是[4,5,-2,-1,0,1,2]，则说明nums[mid]是-1，它的右边一定递增
 *  1.那么就去看看，target是否在右边递增的数组里面 if(target<=nums[right] && target>nums[mid])
 *    1.在右边递增里面的话，那就left = mid + 1
 *    2.如果target不在右边的数组里面，那就要去左边找，那么right = mid-1
 * 4.如果nums[mid] > nums[right]，则说明左边一定递增，比如[4,5,6,7,0,1,2]，去看看target是否在左边递增里面
 *  1.如果在左边递增，那就往左二分查找，也就是right = mid-1
 *  2.如果不在，就往右查找了，也就是left = mid + 1
 */
// nums = [4,5,6,7,0,1,2], target = 0
// [1, 3] 3
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = (left + right) / 2 | 0;
    if (nums[mid] === target) return mid;
    if (nums[mid] < nums[right]) { // 说明mid右边一定递增
      if(target > nums[mid] && target<=nums[right]) {
        left = mid +1;
      } else {
        right = mid -1;
      }
    } else { // 说明mid左边一定递增
      if(target>=nums[left] && target<nums[mid]) {
        right = mid -1;
      } else {
        left = mid +1
      }
    }
  }
  return -1
};

console.log(search([1,3], 3))