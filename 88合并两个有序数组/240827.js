/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1; // nums1当前元素
  let j = n - 1; // nums2当前元素
  let k = m + n - 1; // 合并数组的当前元素
  while (i >= 0 && j >= 0) {
    // 确认当前最大的元素，塞到末尾，以便完成排序
    nums1[k--] = nums1[i] < nums2[j] ? nums2[j--] : nums1[i--];
  }
  // 如果是nums2排序完，即i>0,比如 nums1 = [1,2,3,0,0,0], nums = [4,5,6],无需任何操作
  // 如果是nums1排序完，即j>0,i=-1,比如，nums1 = [4,5,6，0,0,0], nums = [1,2,6]，当前状态是[4,5,6,4,5,6]
  if (j>=0) {
    nums1.splice(0, j + 1,...nums2.slice(0, j + 1))
  }
  console.log(nums1)
};

console.log(merge([1,0], 1, [1], 1))