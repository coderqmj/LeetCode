/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let len = nums.length
  // base case
  if (len === 0) return 0
  if (len === 1) return 1
  let dp = Array(len).fill(1)
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  let maxLength = 0
  for(let i =0;i<dp.length;i++) {
    maxLength = Math.max(maxLength,dp[i])
  }
  return maxLength;
};
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))