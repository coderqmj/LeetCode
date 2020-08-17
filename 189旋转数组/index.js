/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length-k,k))
  return nums;
};

console.log(rotate([1,2,3,4,5,6,7],3))