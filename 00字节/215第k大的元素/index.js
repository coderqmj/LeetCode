/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const swap = (a, i, j) => [a[i], a[j]] = [a[j], a[i] ]
  
  const quickSort = (a, l, r) => {
      if (l >= r) return 
      const p = partition(a, l, r)
      quickSort(a, l, p - 1)
      quickSort(a, p + 1, r)
  }
  const partition = (a, l, r) => {
      let k = l, p = r
      for (let i = l; i < r; i++) {
          if (a[i] > a[p]) {
              swap(a, i, k++)
          }
      }
      swap(a, k, p)
      return k
  }
  quickSort(nums, 0, nums.length - 1)
  return nums[k - 1]
};