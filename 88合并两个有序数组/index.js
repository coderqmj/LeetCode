/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 思路：
 *  1.关键在于nums1的最大值怎么确定，
 *  2.两个数组都是升序，所以要判断nums1[m+n-1]这个位置是放num1[m-1]的元素还是nums2[n-1]的元素
 *  3.确定好nums1[m+n-1]的位置，在确定nums1[m+n-1-1]的位置，直到nums1[0]，就完成了升序合并
 *
 */
var merge = function (nums1, m, nums2, n) {
  let len1 = m - 1;
  let len2 = n - 1;
  let len = m + n - 1;
  while (len1 >= 0 && len2 >= 0) {
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  }
  // 出现len1到0的情况，但是len2还存在长度， [0] 0 [1] 1 这是一种情况，len + 1是因为最后做了--的操作
  nums1.splice(0, len2 + 1, ...nums2.slice(0, len2 + 1));
  console.log(nums1);
};

merge([0], 0, [1], 1);
