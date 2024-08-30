/**
 * https://leetcode.cn/problems/next-permutation/description/
 * 思路：
 *  1.用while循环从右边开始找到第一个小于右边的邻居，把该元素记录为i
 *  2.跳出while后，如果i=-1了，说明没找到，i>=0的话，说明找到第一个小于右边的数了
 *  3.然后需要找到第一个大于nums[i]的数，交换位置
 *  4.如果i=-1，说明是递减数组，需要挨个交换位置。还有就是需要i后面的完成递增，
 *  5.因为走到i这里，后面肯定是递减的（432>234）所以后面需要234这种递增的才能保持更小，所以nums[i+1]到nums[length-1]都要交换位置
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let i = nums.length - 2;
  while (i>=0 && nums[i] >= nums[i+1]) {
    i--;
  }

  if(i>=0) {
    let j = nums.length - 1;
    while (j>=0 && nums[j]<=nums[i]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }

  let l = i + 1;
  let r = nums.length -1;
  while (l<r) {
    [nums[l], nums[r]] = [nums[r], nums[l]]
    l++;
    r--;
  }
  console.log(nums)

};
nextPermutation([1,2,3])