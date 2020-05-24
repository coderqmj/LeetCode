/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2).sort((a, b) => {
    return a - b
  })
  console.log(arr)
  if (arr.length % 2 !== 0) {
    number = arr[Math.floor(arr.length / 2)]
    return arr[Math.floor(arr.length / 2)]
  }
  return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2

};
console.log(findMedianSortedArrays([3], [-2, -1]))