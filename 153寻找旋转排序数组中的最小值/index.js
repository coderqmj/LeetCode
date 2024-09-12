/**
 * 题目：https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/description/
 * 思路：二分法
 * 1.首先判断数组是否被旋转过，如果nums[0]<nums[nums.length-1]，说明都是递增，直接返回nums[0]
 * 2.如果不是则需要用二分法查找数组在哪里被旋转过
 *  1.left = 0; right = nums.length-1; mid = (left+right)/2 | 0
 *  2.当left<right时，需要一直while循环
 *  3.如果nums[mid]>nums[right]的话，说明右边是递减的，答案就在右边，需要向右挪，则left=mid+1
 *  4.如果nums[mid]<nums[right]的话，说明答案在mid的左边(包括mid)，则 right = mid
 * 3.一直循环，等跳出循环的时候，nums[start]就是最小的
 */

// [4,5,60,7,2];
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  if (nums[left] < nums[right]) return nums[0];
  while(left < right) {
    const mid = (left + right)/2 | 0;
    if(nums[mid]>nums[right]) {
      left = mid + 1;
    }else {
      right = mid;
    }
  }
  return nums[left]
};