/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let len1 = m - 1;
  let len2 = n - 1;
  let l3 = m + n - 1;
  while (len1 >= 0 && len2 >= 0) {
    nums1[l3--] = nums1[len1] < nums2[len2] ? nums2[len2--] : nums1[len1--]
  }
  if (len2 >= 0) {
    nums1.splice(0, len2 + 1, ...nums2.slice(0, len2 + 1))
  }
  console.log(nums1)
};

console.log(merge([0], 0, [1], 1))