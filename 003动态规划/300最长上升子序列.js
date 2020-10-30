/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // base case
    if (len === 0) return 0
    if (len === 1) return 1
  // dp[i]的含义：以nums[i]结尾的最长上升子序列的大小
  // 初始化：dp[0] = 1
  // 状态转移方程：遍历之前的元素，大于就让dp[遍历i]+1 然后取最大值
  let dp = [];
  dp[0] = 1;
  let max = dp[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if(nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i],dp[j]+1)
      }
    }   
    max = Math.max(max,dp[i]) 
  }
  return max;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))