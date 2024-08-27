/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 
 * 思路：
 *  1.因为是有序数组，所有直接从nums1[m+n-1]的位置开始，去比较nums1[m-1]大还是nums2[n-1]大，谁大谁就放进去
 *  2.谁放进去，谁比较的位置就-1，比如当前nums2[i]大，那就i--，然后m+n-1也要--（最后一个位置确定好，要确定下一个位置），
 */
var merge = function (nums1, m, nums2, n) {
  let len1 = m - 1;
  let len2 = n - 1;
  let len = m + n - 1;
  while (len1 >= 0 && len2 >= 0) {
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  }
  // 出现len1到0的情况，但是len2还存在长度， [0] 0 [1] 1 这是一种情况，len + 1是因为最后做了--的操作
  nums1.splice(0, len2 + 1, ...nums2.slice(0, len2 + 1))
  console.log(nums1)
};

merge([0], 0, [1], 1)